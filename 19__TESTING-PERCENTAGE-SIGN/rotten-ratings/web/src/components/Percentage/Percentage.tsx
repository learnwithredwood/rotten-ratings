import { PercentSign } from './PercentSign'

interface PercentageProps {
  percentage: number
  ring?: boolean
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

const Percentage = ({
  percentage,
  ring = true,
  size = 'small',
}: PercentageProps) => {
  const ringSizes = {
    small: 110,
    medium: 300,
    large: 0,
    xlarge: 0,
  }

  return (
    <div
      data-testid="percentageWrapper"
      className={`relative inline-block
      ${percentage <= 50 && 'text-oriolesOrange'}
      ${50 < percentage && percentage < 70 && 'text-lemonLime'}
      ${70 < percentage && 'text-chartreuse'}
    `}
    >
      {ring && (
        <svg
          data-testid="ring"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/svg"
          width={ringSizes[size]}
          height={ringSizes[size]}
          viewBox="0 0 230 230"
        >
          <circle
            cx="115"
            cy="115"
            r="100"
            fill="black"
            strokeWidth="8"
            stroke="#393939"
          />
          <circle
            data-testid="percentageRing"
            cx="115"
            cy="115"
            r="100"
            fill="none"
            strokeWidth="8"
            className="stroke-current"
            strokeDasharray={`calc((${percentage} / 100) * 628.32) 628.32`}
            transform="rotate(-90) translate(-230)"
          />
        </svg>
      )}
      <div
        className={`center gap-x-1 ${
          ring && ringSizes[size] > 0 && 'absolute inset-0 h-full w-full'
        }`}
      >
        <div
          className={`font-modern leading-none
          ${size === 'small' && 'text-5xl'}
          ${size === 'medium' && 'text-[9.25rem]'}
          ${size === 'large' && 'text-[10rem]'}
          ${size === 'xlarge' && 'text-[16rem]'}
        `}
        >
          {percentage}
        </div>
        <div className="relative -top-2">
          <PercentSign size={size} />
        </div>
      </div>
    </div>
  )
}

export { Percentage, PercentageProps }
