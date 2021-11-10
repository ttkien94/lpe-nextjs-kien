import styles from "./styles/styles.module.scss";

function EventCard() {
  return (
    <div className={styles.wrapperEvent}>
      <div className="col-2 col-lg-1">
        <div className={styles.dateEvent}>
          <span className={styles.dateEvent_month}>Tháng 1</span>
          <span className={styles.line}></span>
          <span className={styles.dateEvent_day}>03</span>
        </div>
      </div>
      <div className="col-10 col-lg-6">
        <div className={styles.eventImg_big}>
          <img
            src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg"
            alt="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-12 col-lg-5 mt-4 mt-lg-0">
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>Business Mastery</h3>
          <p>Quận 7, thành phố Hồ Chí Minh</p>
          <p className={styles.contentDay}>27-31/6/2021 </p>

          <p className={styles.descriptionEvent}>
            Business Mastery Virtual is a 5-day event that will help you
            understand what’s really impacting your business in today’s climate,
            then optimize your strategy to make your organization truly
            unshakeable. You will: – Discover the surprising and critical
            factors that are holding your business back. – Learn how to use
            changes in the economy as opportunities instead of letting them
            become roadblocks. – Create a monumental vision for your business
            that reignites your passion and purpose. – Gain actionable
            strategies...
          </p>

          <button type="button" className={styles.btnEvent}>
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
