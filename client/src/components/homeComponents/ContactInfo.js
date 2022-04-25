import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Số điện thoại:</h5>
            <p>0736 230 063</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>XÉO CLOSET</h5>
            <p>
              122/2 đường 3/2, Đầu bờ kè Mạc Thiên Tích - Đối diện cổng B Đại
              Học, Xuân Khánh, Ninh Kiều, Cần Thơ, Vietnam
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>GIỚI THIỆU</h5>
            <p>
              {" "}
              Shop Thời Trang XÉO CLOSET là kênh mua sắm online uy tín hàng đầu,
              cùng với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết đem
              những sản phẩm tốt nhất, với giá cả phải chăng, uy tín và chất
              lượng với dịch vụ tốt nhất đến với khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
