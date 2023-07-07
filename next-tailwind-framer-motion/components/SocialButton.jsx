const SocialButton = ({ children, bgColor = 'black' }) => {
  let bgHoverColorClass;

  switch (bgColor) {
    case 'dribbble':
      bgHoverColorClass = 'hover:bg-dribbble';
      break;
    case 'instagram':
      bgHoverColorClass = 'hover:bg-instagram';
      break;
    case 'twitter':
      bgHoverColorClass = 'hover:bg-twitter';
      break;
    case 'linkedin':
      bgHoverColorClass = 'hover:bg-linkedin';
      break;
    default:
      bgHoverColorClass = 'hover:bg-black';
  }

  return (
    <button
      className={`h-12 w-12 bg-white rounded-full transition-colors duration-200 ease-in-out ${bgHoverColorClass}`}
    >
      <div className='fill-black group-hover:fill-white transition-colors duration-200 ease-in-out grid place-items-center'>
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
