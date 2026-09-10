import Image from "next/image";

export const OfficersWrapper = ({ children }: { children: React.ReactNode }) => {

  const wrapperStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "24px",
    width: "90vw",
    maxWidth: "90vw",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  }

  return (
    <div style={wrapperStyles}>
      {children}
    </div>
  )
}

const OfficerBio = ({ children, imageSrc }: { children: React.ReactNode, imageSrc: string }) => {

  return (
    <div
      className="bioWrapper [&_a]:not-prose"
    >
      <Image src={imageSrc} alt="" height={250} width={250} className="object-contain m-0! aspect-square" />
      <div className="">
        {children}
      </div>
    </div>
  )

}

export default OfficerBio;
