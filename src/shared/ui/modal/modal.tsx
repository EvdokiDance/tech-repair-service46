'use client';
import React from "react";


import { Modal as AntdModal } from "antd";
interface Props {
  className?: string;
  children?: React.ReactNode;
  handleCancel?: () => void;
  isModalOpen?: boolean;
}

export const Modal: React.FC<Props> = ({  children, handleCancel, isModalOpen }) => {

  return (
      <AntdModal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </AntdModal>
  );
};
