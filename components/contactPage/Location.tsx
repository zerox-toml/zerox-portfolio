import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
      
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.204264029556!2d106.74609579999999!3d-6.2367854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0bfc0b4c37b%3A0xcd38ce5c338c1660!2sJl.%20Bahagia%20No.7%2C%20RT.006%2FRW.002%2C%20Kreo%20Selatan%2C%20Kec.%20Larangan%2C%20Kota%20Tangerang%2C%20Banten%2015156%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1725553249090!5m2!1sen!2sus"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Lampung, Indonesia" />
        <MyInfo field="email" value="passionkaizen961111@gmail.com" />
        <MyInfo field="phone" value="+62 831 8173 9915" />
        <MyInfo field="Blockchain & NLP Engineer" value="Available" />
      </ul>
    </div>
  )
}
