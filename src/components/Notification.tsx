import React, { useState } from "react";

import { BellOutlined } from "@ant-design/icons";
import { Badge, Button, Divider, Popover, Space, Spin } from "antd";
import moment from "moment-timezone";

export const Notifications: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = { data: [], isLoading: false };

  const content = (
    <Space direction="vertical" split={<Divider style={{ margin: 0 }} />}>
      
    </Space>
  );

  const loadingContent = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 20,
      }}
    >
      <Spin />
    </div>
  );

  return (
    <Popover
      placement="bottomRight"
      content={isLoading ? loadingContent : content}
      trigger="click"
      onOpenChange={(newOpen) => setOpen(newOpen)}
      overlayStyle={{ width: 400 }}
    >
      <Badge dot>
        <Button shape="circle" icon={<BellOutlined />} style={{ border: 0 }} />
      </Badge>
    </Popover>
  );
};
