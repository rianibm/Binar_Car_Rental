// src/pages/AdminLogin.tsx
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // const apiUrlBase = process.env.REACT_APP_API_BASE_URL;
  const apiUrlBase = import.meta.env.REACT_APP_API_BASE_URL;

  const handleLogin = async () => {
    try {
      setLoading(true);

      const formValues = await form.validateFields();
      // const apiUrl = process.env.REACT_APP_API_URL + "/authenticate";
      const apiUrl = `${apiUrlBase}/authenticate`;

      const response = await fetch(`${apiUrlBase}/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const userData = await response.json();

        if (userData.role === "admin") {
          const userResponse = await fetch(
            `${apiUrlBase}/users/${formValues.email}`
          );
          const userData = await userResponse.json();

          navigate("/admin-dashboard");
        } else {
          message.error(
            "Invalid user role. You are not authorized to access this site."
          );
        }
      } else {
        message.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check if the email and password fields are not empty
  const isFieldsFilled =
    form.getFieldValue("email") && form.getFieldValue("password");

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
              disabled={!isFieldsFilled}
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
