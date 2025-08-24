import { Toast } from "bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Cập nhật thành công!");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Nhập giao dịch
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">Thời gian</label>
              <input
                type="datetime-local"
                {...register("datetime", {
                  required: "Vui lòng nhập thời gian",
                })}
                className={`w-full border rounded px-3 py-2 ${
                  errors.datetime ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.datetime && (
                <p className="text-danger">{errors.datetime.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Số lượng</label>
              <input
                type="number"
                step={0.01}
                {...register("amount", { required: "Nhập số lượng" })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.amount && (
                <p className="text-danger">{errors.amount.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Trụ</label>
              <select
                {...register("pump", { required: "Chọn trụ" })}
                className="w-full border border-gray rounded px-3 py-2"
              >
                <option value="">-- Chọn trụ --</option>
                <option value="1">Trụ 1</option>
                <option value="2">Trụ 2</option>
                <option value="3">Trụ 3</option>
              </select>
              {errors.pump && (
                <p className="text-danger">{errors.pump.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Doanh thu</label>
              <input
                type="number"
                step={1000}
                {...register("total", { required: "Nhập doanh thu" })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.total && (
                <p className="text-danger">{errors.total.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">Đơn giá</label>
              <input
                type="number"
                step={1000}
                {...register("unitPrice", { required: "Nhập đơn giá" })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.unitPrice && (
                <p className="text-danger">{errors.unitPrice.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded font-semibold "
            >
              Cập nhật
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default FormPage;
