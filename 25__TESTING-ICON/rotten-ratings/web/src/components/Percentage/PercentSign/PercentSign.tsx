interface PercentSignProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

const PercentSign = ({ size = 'small' }: PercentSignProps) => {
  const sizes = {
    small: {
      height: 18,
      width: 13,
    },
    medium: {
      height: 60,
      width: 43,
    },
    large: {
      height: 123,
      width: 68,
    },
    xlarge: {
      height: 123,
      width: 68,
    },
  }

  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 44 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>%</title>
      <path d="M11.3491 22.3795C26.7201 22.3795 26.5608 0 11.3491 0C-3.86258 0 -3.70329 22.3795 11.3491 22.3795ZM11.3491 1.35392C17.4019 1.35392 17.4019 21.0256 11.3491 21.0256C5.53523 21.0256 5.53523 1.35392 11.3491 1.35392ZM36.5958 1.99106L3.14595 57.7407H6.49093L39.9407 1.99106H36.5958ZM31.6579 59.0947C46.9493 59.0947 46.8696 36.7151 31.6579 36.7151C16.4462 36.7151 16.6055 59.0947 31.6579 59.0947ZM31.6579 38.0691C37.7108 38.0691 37.7108 57.7407 31.6579 57.7407C25.844 57.7407 25.844 38.0691 31.6579 38.0691Z" />
    </svg>
  )
}

export { PercentSign, PercentSignProps }
