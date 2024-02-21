// src/pages/AdminLogin.tsx
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [/* loading */ setLoading] = useState(false);

  const handleLogin = async (values: any) => {
    try {
      // setLoading(true);

      // Get API URL from environment variable
      const apiUrl = process.env.REACT_APP_API_URL + "/authenticate";

      // Replace this with your actual API endpoint for authentication
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Assume the API returns user data including role
        const userData = await response.json();

        // Redirect based on user role
        if (userData.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          // Show an error message for invalid roles
          message.error("Invalid user role. Please try again.");
        }
      } else {
        // Show an error message for invalid credentials
        message.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      // setLoading(false);
    }
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
          // onValuesChange={onValuesChange}
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
