import { Button, DatePicker, Form, Input, message, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React from "react";

const Edit = () => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Sửa Công Việc </h2>
      <Form layout="vertical">
        <Form.Item name="title" label="Tên công việc">
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Mô tả">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Kì hạn"
          rules={[
            {
              validator: (_, value) => {
                if (!value || dayjs(value).isAfter(dayjs(), "day")) {
                  return Promise.resolve();
                }
                return Promise.resolve("ngay phai o tuong lai");
              },
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="priority" label="Trạng thái công việc">
          <Select placeholder="Chọn mức độ ưu tiên">
            <Select.Option value="high">Cao</Select.Option>
            <Select.Option value="medium">Trung bình</Select.Option>
            <Select.Option value="low">Thấp</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="status" label="Trạng thái" valuePropName="checked">
          <Switch
            checkedChildren="Hoàn thành"
            unCheckedChildren="Chưa hoàn thành"
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Thêm Công Việc
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
