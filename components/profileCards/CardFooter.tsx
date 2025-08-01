interface props {
  children: React.ReactNode;
}

export default function CardFooter({ children }: props) {
  return (
    <div
      className="CardFooter"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "40%",
        alignItems: "center",
        backgroundColor: "#dcdcdcff",
        padding: "0px 14px",
      }}
    >
      {children}
    </div>
  );
}
