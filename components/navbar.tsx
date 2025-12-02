import Link from "next/link"

export function Navbar() {
  return (
    <nav
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "min-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        overflow: "clip",
        alignContent: "center",
        flexWrap: "nowrap",
        gap: "10px",
        position: "absolute",
        borderRadius: "0px 0px 0px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1a1a1a",
            textDecoration: "none",
          }}
        >
          Roundi Blog
        </Link>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "30px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Home
          </Link>
          <Link
            href="/blog"
            style={{
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
