const ServiceCard = ({ iconColor, bgColor, hoverBg, title, description, iconPath }) => (
    <div className="text-center group">
      <div className="mb-6">
        <div className={`w-16 h-16 mx-auto ${bgColor} rounded-2xl flex items-center justify-center ${hoverBg} transition-colors duration-300`}>
          <svg className={`w-8 h-8 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );

export default ServiceCard