import humanAnatomy from '../../assets/HumanAna.png';
const AnatomySection = () => {
  return (
    <div className="bg-[#F6FAFF] rounded-2xl py-10 mx-15 max-w-2xs relative">
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={humanAnatomy}
            alt="Human Body Silhouette"
            className="w-52 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
