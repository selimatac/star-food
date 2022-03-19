/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  StarDropdown,
  StarInput,
  StarNumberInput,
  StarTextarea,
} from "../components";
import moment from "moment";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../store/actions/ordersActions";
import { XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
const NewOrder = () => {
  useFirestoreConnect("orderItems");
  const firestore = useFirestore();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const products = useSelector((state) => state.firestore.ordered.orderItems);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);

  const [formData, setFormData] = useState({
    orderNumber: Date.now(),
    orderDateTime: moment().format("LLL"),
    orderStatus: "new",
    name: "",
    contact: "",
    transType: "Delivery",
    message: "",
    orderItems: [],
    totalAmount: "",
    selectedItems: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createOrder({ firestore }, formData));
    navigate(`/orders`);
  };
  const handleRemoveSelectedProduct = (id) => {
    if (window.confirm("Are u sure?")) {
      setSelectedOrderItems([...selectedOrderItems.filter((x) => x.id !== id)]);
      setFormData({
        ...formData,
        orderItems: formData.orderItems.filter((x) => x.id !== id),
      });
    }
  };
  const handleQuantityChange = (id, v) => {
    let t = selectedOrderItems;
    t.find((x) => x.id === id).quantity = v.value;
    setSelectedOrderItems([...t]);
  };
  const calcTotalAmount = () => {
    const totalPrice = selectedOrderItems.map((x) => x.price * x.quantity);
    setFormData({
      ...formData,
      totalAmount: totalPrice.reduce((a, b) => a + b, 0),
      selectedItems: selectedOrderItems,
    });
  };

  useEffect(() => {
    let wq = [];
    formData.orderItems.forEach((x) =>
      wq.push({
        ...x,
        quantity: selectedOrderItems.find((s) => s.id === x.id)
          ? selectedOrderItems.find((s) => s.id === x.id).quantity
          : 1,
      })
    );
    setSelectedOrderItems([...wq]);
  }, [formData?.orderItems]);

  useEffect(() => {
    calcTotalAmount();
  }, [selectedOrderItems]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="page__content-create-order">
        <div className="page__content-create-order__left">
          <div className="page__content-create-order__info">
            <div className="page__content-create-order__info-item">
              <span>Order Number:</span> <span>#{formData.orderNumber}</span>
            </div>
            <div className="page__content-create-order__info-item">
              <span>Date/Time:</span>
              <span>{formData.orderDateTime}</span>
            </div>
          </div>
          <StarInput
            inputProps={{
              type: "text",
              id: "name",
              name: "name",
              value: formData.name,
              placeholder: "Name",
              required: true,
              onChange: handleChange,
            }}
            label="Name"
          />
          <StarInput
            inputProps={{
              type: "tel",
              id: "contact",
              name: "contact",
              value: formData.contact,
              placeholder: "Contact",
              required: true,
              onChange: handleChange,
            }}
            label="Contact"
          />
          <h2 className="text-[23px] text-black-10 font-medium mb-2">
            Trans Type
          </h2>
          <div className="flex">
            <StarInput
              inputProps={{
                type: "radio",
                id: "transTypeDelivery",
                name: "transType",
                checked: formData.transType === "Delivery",
                value: "Delivery",
                className: "mb-3 mr-4",
                required: true,
                onChange: handleChange,
              }}
              className="mr-8 flex items-center justify-center !flex-row-reverse"
              label="Delivery"
            />
            <StarInput
              inputProps={{
                type: "radio",
                id: "transTypeTakeaway",
                name: "transType",
                checked: formData.transType === "Takeaway",
                value: "Takeaway",
                className: "mb-3 mr-4",
                required: true,
                onChange: handleChange,
              }}
              className="flex items-center justify-center !flex-row-reverse"
              label="Takeaway"
            />
          </div>
          <StarTextarea
            inputProps={{
              id: "message",
              name: "message",
              value: formData.message,
              placeholder: "Message to client",
              required: true,
              onChange: handleChange,
            }}
            label="Message to client"
          />
          <StarDropdown
            label="Order Items"
            id="orderItems"
            name="orderItems"
            placeholder="Choose"
            value={formData.orderItems}
            data={products}
            required
            onChange={(values) =>
              setFormData({ ...formData, orderItems: values })
            }
          />
          <div className="order-item__quantity">
            {selectedOrderItems?.map((item, index) => (
              <div className="order-item__quantity-wrapper" key={index}>
                <div className="-title">{item?.text}</div>
                <div className="-actions">
                  <div className="-price">{item?.price}$</div>
                  <StarNumberInput
                    onChange={(value) => handleQuantityChange(item.id, value)}
                  />
                  <button
                    className="-remove"
                    type="button"
                    onClick={() => handleRemoveSelectedProduct(item.id)}
                  >
                    <XIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="page__content-create-order__right">
          <div className="page__content-create-order__delivery-details">
            <h3 className="page__content-create-order__delivery-details-title">
              Delivery Details
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Order Item</th>
                  <th>Number</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrderItems.map((x, index) => (
                  <tr key={index}>
                    <td>{x.text}</td>
                    <td>{x.quantity}</td>
                    <td>{x.price}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page__content-create-order__delivery-details">
            <h2 className="page__content-create-order__total-amount">
              Total Amount: <span>{formData.totalAmount}$</span>
            </h2>
          </div>
          <div className="page__content-create-order__buttons">
            <button type="reset" className="star-btn lg">
              Cancel
            </button>
            <button type="submit" className="star-btn star-btn__success lg">
              Add Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewOrder;
