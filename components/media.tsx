import { socialMedias } from "../data"

export default function MediaIcons() {
  return (
    <div className="flex gap-5 items-center justify-center mt-7">
      {socialMedias.map(({ id, Icon, mediaUrl, info }) => (
        <a rel="noreferrer" href={mediaUrl} target="_blank" key={id}>
          <Icon className="text-gray-300 text-3xl transition-all duration-300 hover:text-main-orange cursor-pointer" />
        </a>
      ))}
    </div>
  )
}