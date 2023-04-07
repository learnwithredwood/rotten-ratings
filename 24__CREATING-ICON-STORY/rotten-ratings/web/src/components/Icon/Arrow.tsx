interface ArrowProps {
  size?: number
}

const Arrow = ({ size = 24 }: ArrowProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Icon</title>
      <path d="M10.0666 7.40068V24H13.9333V7.40068L18.3663 11.8337L21.1 9.10005L12 0L2.8999 9.10005L5.63359 11.8337L10.0666 7.40068Z" />
    </svg>
  )
}

export { Arrow }
