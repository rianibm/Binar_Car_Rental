// src/pages/AdminLogin.tsx
import React from "react";
import { Form, Input, Button } from "antd/lib";
import { useForm } from "antd/lib/form/Form";

const AdminLogin: React.FC = () => {
  const [form] = useForm();
  const handleLogin = (values: any) => {
    console.log("Received values:", values);
  };
  const onValuesChange = () => {
    form.setFieldsValue({
      email: form.getFieldValue("email"),
      password: form.getFieldValue("password"),
    });
  };

  return (
    <div className="flex gap-2 ">
      <img
        src="/image/login-img.svg"
        alt="Gambar Mobil Halaman Login"
        className="hidden md:block w-[67.1%] h-screen"
      />
      <div className="flex flex-col gap-2 justify-center mx-auto mt-[120px]">
        <div className="bg-primary-background w-[100px] h-[34px]" />
        <h1 className="text-xl text-black font-helvetica text-bold">
          Welcome, Admin BCR
        </h1>
        <Form
          form={form}
          name="login-form"
          layout="vertical"
          size="large"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          onValuesChange={onValuesChange}
          className="font-helvetica"
          style={{ maxWidth: "300px", margin: "auto" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Masukkan email terlebih dahulu" },
              {
                type: "email",
                message: "Email tidak valid",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Contoh: johndee@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Masukkan password terlebih dahulu" },
              { min: 6, message: "Password harus minimal 6 digit" },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="6+ karakter" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{ width: "100%" }}
              className="bg-primary text-white cursor-pointer"
              disabled={
                !form.getFieldValue("email") || !form.getFieldValue("password")
              }
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
