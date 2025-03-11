import styles from "./Order.module.css";

function Order({ orderRef }) {
  return (
    <div className={styles.container} ref={orderRef}>
      <form className={styles.form}>
        <p>Order</p>
        <div className={styles.input}>
          <label>Full Name</label> <input type="text" />
        </div>
        <div className={styles.input}>
          <label>Address</label> <input type="text" />
        </div>
        <div className={styles.input}>
          <label>Quantity</label> <input type="number" />
        </div>
        {/* <div className={styles.input}><label>Full Name</label> <input type="text"/></div> */}
        <button>Order</button>
      </form>
    </div>
  );
}

export default Order;
