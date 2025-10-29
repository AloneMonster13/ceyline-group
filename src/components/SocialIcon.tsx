import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
  platform?: string;
}

const getPlatformColors = (platform?: string) => {
  switch (platform) {
    case 'facebook':
      return {
        bg: 'bg-[#1877F2]',
        hover: 'hover:bg-[#1877F2]/90',
        border: 'border-[#1877F2]/30',
        icon: 'text-white'
      };
    case 'instagram':
      return {
        bg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#F77737]',
        hover: 'hover:opacity-90',
        border: 'border-transparent',
        icon: 'text-white'
      };
    case 'linkedin':
      return {
        bg: 'bg-[#0A66C2]',
        hover: 'hover:bg-[#0A66C2]/90',
        border: 'border-[#0A66C2]/30',
        icon: 'text-white'
      };
    case 'youtube':
      return {
        bg: 'bg-[#FF0000]',
        hover: 'hover:bg-[#FF0000]/90',
        border: 'border-[#FF0000]/30',
        icon: 'text-white'
      };
    case 'tiktok':
      return {
        bg: 'bg-[#000000]',
        hover: 'hover:bg-[#000000]/90',
        border: 'border-[#00F2EA]/30',
        icon: 'text-[#00F2EA]'
      };
    default:
      return {
        bg: 'bg-white/10',
        hover: 'hover:bg-secondary',
        border: 'border-white/20',
        icon: 'text-white'
      };
  }
};

const SocialIcon = ({ icon: Icon, href, label, platform }: SocialIconProps) => {
  const colors = getPlatformColors(platform);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`h-12 px-6 rounded-full ${colors.bg} backdrop-blur-sm border ${colors.border} flex items-center justify-center gap-3 ${colors.hover} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full`}
    >
      <Icon className={`w-5 h-5 ${colors.icon} flex-shrink-0`} />
      <span className={`${colors.icon} font-semibold text-sm md:text-base`}>{label}</span>
    </a>
  );
};

export default SocialIcon;
