interface props {
  children: React.ReactNode;
}

export default function CardBody({ children }: props) {
  return (
    <div
      className="CardBody"
      style={{
        height: "100%",
        borderTopStyle: "ridge",
        textAlign: "left",
        padding: "4px 18px",
        backgroundColor: "transparent",
        overflowWrap: "break-word",
      }}
    >
      {children}
    </div>
  );
}
