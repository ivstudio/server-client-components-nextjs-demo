"use client";

interface Props {
  children: React.ReactNode;
}
export default function ClientComponent({ children }: Props) {
  return (
    <>
      <section style={{ background: "#dddddd" }}>
        <h3>Client Component</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus
          quam et eros sodales elementum. Sed interdum risus non massa dignissim
          semper. Fusce hendrerit sed lorem vitae mollis.
        </p>
      </section>

      {children}
    </>
  );
}
