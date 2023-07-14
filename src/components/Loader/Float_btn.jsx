import React from "react";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
export default function Float_btn() {
  return (
    <div className="">
      <FloatButton.Group trigger="click" type="primary" style={{ right: 94}}
        icon={<CustomerServiceOutlined  />}
      >
        <FloatButton />
        <FloatButton  icon={<CommentOutlined />} />
      </FloatButton.Group>
    </div>
  );
}
