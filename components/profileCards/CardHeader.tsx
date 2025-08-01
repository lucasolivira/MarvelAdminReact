interface props {
  children: React.ReactNode;
}

export default function CardHeader({ children }: props) {
  return (
    <div
      className="CardHeader"
      style={{
        backgroundColor: "#dcdcdcff",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
