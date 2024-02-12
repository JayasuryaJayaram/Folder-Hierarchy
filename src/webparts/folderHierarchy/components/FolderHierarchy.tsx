import * as React from "react";
import styles from "./FolderHierarchy.module.scss";
import { addToCpg, addToCasg } from "../service/spservice";
import type { IFolderHierarchyProps } from "./IFolderHierarchyProps";
import { Form, Input, Button, Modal, Radio } from "antd";
import { useState } from "react";

const FolderHierarchy = (props: IFolderHierarchyProps) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      if (values.Department === "cpg") {
        await addToCpg(values);
        console.log("Data submitted to CPG SharePoint list");
      } else if (values.Department === "casg") {
        await addToCasg(values);
        console.log("Data submitted to CASG SharePoint list");
      }

      setIsModalVisible(true);

      form.resetFields();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.Heading}>Folder Hierarchy</div>
        <Form
          form={form}
          onFinish={onFinish}
          className={styles.form}
          layout="vertical"
        >
          {/* Ant Design Form Fields */}
          <Form.Item
            name="Department"
            label="Department"
            rules={[
              { required: true, message: "Please choose the department" },
            ]}
          >
            <Radio.Group>
              <Radio value="casg">CASG</Radio>
              <Radio value="cpg">CPG</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="customer"
            label="Customer"
            rules={[{ required: true, message: "Please enter customer name" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please enter case subject" }]}
          >
            <Input placeholder="Enter case subject" />
          </Form.Item>
          <Form.Item
            name="product"
            label="Product"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>
          <Form.Item
            name="supportType"
            label="Support Type"
            rules={[{ required: true, message: "Please enter support type" }]}
          >
            <Input placeholder="Enter support type" />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact"
            rules={[{ required: true, message: "Please enter contact" }]}
          >
            <Input type="number" placeholder="Enter contact" />
          </Form.Item>
          <Form.Item>
            <div>
              {/*//className={styles.popRow} */}
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitBtn}
              >
                Submit
              </Button>
              <Modal
                title="Successfully submitted!.."
                visible={isModalVisible}
                onCancel={handleModalOk}
                footer={[
                  <Button key="submit" type="primary" onClick={handleModalOk}>
                    OK
                  </Button>,
                ]}
              >
                <p>Your request is submitted.</p>
              </Modal>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FolderHierarchy;
