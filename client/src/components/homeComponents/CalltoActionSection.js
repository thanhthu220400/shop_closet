import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn muốn được tư vấn</h2>
              <p>Đăng ký miễn phí và nhận thông tin sản phẩm mới.</p>
              <form className="form-section">
                <input
                  placeholder="Email của bạn..."
                  name="email"
                  type="email"
                />
                <input value="Vâng. Tôi muốn!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
