export default function WhatsAppButton() {
  const phoneNumber = "917981431364" // Format: country code + number without +
  const message = "Hello, I'm interested in your waterproofing services. Can you provide more information?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="h-8 w-8 relative">
        <svg viewBox="0 0 32 32" className="fill-current text-white">
          <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.73-.43-.618-1.79-1.624-3.684-1.624-3.684-.4-.8-.57-.57-.716-.716-.86-.86-1.804-.862-2.15-.862-.35 0-.716.086-1.003.232a3.42 3.42 0 0 0-1.48 1.608c-.546 1.29-.46 2.863.37 4.38.057.075.067.15.023.17-2.83 3.258-1.75 7.376 1.064 10.19.046.063.125.13.18.195 1.5 1.634 3.43 3.977 5.774 5.265.4.214.79.414 1.18.583.277.117.88.214 1.16.214 1.303 0 2.02-.816 2.65-1.79.346-.512.7-1.036.7-1.493 0-.526-.432-.864-.73-1.152-.37-.36-.86-.832-1.175-1.114-.13-.152-.3-.29-.52-.29-.22 0-.532.26-.86.715-.76.105-.16.21-.25.316-.165.196-.37.416-.516.57-.338.37-1.038.76-1.604.76" />
          <path d="M16.102 0C7.298 0 .3 6.998.3 15.802c0 2.8.732 5.54 2.12 7.933L.002 32l8.4-2.195c2.295 1.25 4.878 1.915 7.7 1.915 8.803 0 15.8-6.998 15.8-15.802C31.902 6.998 24.904 0 16.1 0m0 28.905c-2.457 0-4.862-.635-6.975-1.834l-.5-.298-5.17 1.352 1.375-5.02-.314-.5a13.091 13.091 0 0 1-2.01-7.003c0-7.268 5.9-13.168 13.17-13.168 7.168 0 13.068 5.9 13.068 13.168 0 7.27-5.9 13.17-13.068 13.17" />
        </svg>
      </div>
    </a>
  )
}
