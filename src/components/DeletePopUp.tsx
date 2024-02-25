import React, { useState } from "react";
import { Modal, Button } from "antd/lib";

interface DeleteConfirmationProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isVisible,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      open={isVisible}
      onCancel={onCancel}
      maskClosable={true}
      title="Menghapus Data Mobil"
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Tidak
        </Button>,
        <Button
          key="confirm"
          className="bg-primary text-white"
          onClick={onConfirm}
        >
          Ya
        </Button>,
      ]}
    >
      <div>
        <p>Setelah dihapus, data mobil tidak dapat dikembalikan.</p>
        <p>Yakin ingin menghapus?</p>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;
