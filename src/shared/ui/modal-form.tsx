"use client";

import React from "react";
import { cn } from "@/shared/lib";
import { Button, Form, FormProps, Input } from "antd";
import { Modal } from ".";
import { Nunito } from "next/font/google";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}
const nunito = Nunito({ subsets: ["cyrillic"] });

type FieldType = {
    firstName?: string;
    phone?: string;
};

export const ModalForm: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [form] = Form.useForm()


 const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new Error(data?.message || "Не удалось отправить заявку");
    }

    toast.success('Заявка успешно отправлена!');
    setOpen(false);
    form.resetFields();
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Не удалось отправить заявку");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <>
      <Button
        className={cn(
          "w-full max-w-[360px] h-[60px] text-xl",
          nunito.className,
          className
        )}
        type="primary"
        onClick={() => setOpen(true)}
      >
        Оставить заявку
      </Button>
      <Modal isModalOpen={open} handleCancel={() => setOpen(false)}>
        <h3 className="text-xl font-medium mt-5 text-center">Заявка на обратный звонок</h3>
        <p  className="text-gray-400 font-medium text-center mt-5 text-base">Оставьте заявку и менеджеры свяжутся с Вами в течение 5-10 минут.</p>
        <Form
          form={form}
          onFinish={onFinish}
          className="mt-10"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Ваше имя"
            name="firstName"
            rules={[{ required: true, message: "Пожалуйста введите ваше имя" }, {min: 3, message: "Минимальная длина имени 3 символа"}]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Номер телефона:"
            name="phone"
            rules={[{required: true, message: "Пожалуйста введите ваш номер"}, { pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, message: "Вы ввели неправильно номер" }]}
  
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button loading={isSubmitting} className="w-full mt-5" type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
