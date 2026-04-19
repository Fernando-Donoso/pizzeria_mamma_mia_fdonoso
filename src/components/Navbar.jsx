import React from "react";

const Navbar = ({ isLoggedIn = false }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* Lado izquierdo: Brand + botones */}
        <div style={styles.left}>
          <span style={styles.brand}>Pizzería Mamma Mia!</span>

          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
              🍕 Home
            </button>

            {isLoggedIn ? (
              <>
                <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔓 Profile
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔐 Login
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔐 Register
                </button>
              </>
            )}
          </div>
        </div>

        {/* Lado derecho: Total carrito */}
        <div>
          <button type="button" className="btn btn-outline-success btn-sm" style={styles.cartBtn}>
            🛒 Total: $25.00
          </button>
        </div>

      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#1e1e2e",
    padding: "0.4rem 0",
    borderBottom: "1px solid #2e2e3e",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 1rem",
    boxSizing: "border-box",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "8px",
  },
  brand: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "1rem",
    whiteSpace: "nowrap",
  },
  btn: {
    color: "#aaaaaa",
    borderColor: "#555555",
    fontSize: "0.8rem",
    padding: "0.25rem 0.6rem",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
  },
  cartBtn: {
    color: "#20c997",
    borderColor: "#20c997",
    fontSize: "0.8rem",
    padding: "0.25rem 0.75rem",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
  },
};

export default Navbar;
