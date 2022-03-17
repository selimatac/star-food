import React, { useState } from "react";
import { StarDropdown, StarInput, StarTextarea } from "../components";
import moment from "moment";

const NewOrder = () => {
  const [orderNumber, setOrderNumber] = useState(Date.now());
  const [orderDateTime, setOrderDateTime] = useState(moment().format("LLL"));
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    transType: "Delivery",
    message: "",
    orderItems: [],
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="page__content-create-order">
        <div className="page__content-create-order__left">
          <div className="page__content-create-order__info">
            <div className="page__content-create-order__info-item">
              <span>Order Number:</span> <span>#{orderNumber}</span>
            </div>
            <div className="page__content-create-order__info-item">
              <span>Date/Time:</span>
              <span>{orderDateTime}</span>
            </div>
          </div>
          <StarInput
            inputProps={{
              type: "text",
              id: "name",
              name: "name",
              value: formData.name,
              placeholder: "Name",
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
            data={[
              { id: "1", text: "Beef Stroganoff" },
              { id: "2", text: "Reuben" },
              { id: "3", text: "Sandwich" },
            ]}
            onChange={(values) =>
              setFormData({ ...formData, orderItems: values })
            }
          />
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
                <tr>
                  <td>Beef</td>
                  <td>1</td>
                  <td>29$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page__content-create-order__delivery-details">
            <h2 className="page__content-create-order__total-amount">
              Total Amount: <span>84$</span>
            </h2>
          </div>
          <div className="page__content-create-order__buttons">
            <button className="star-btn lg">Cancel</button>
            <button className="star-btn star-btn__success lg">Add Order</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewOrder;
