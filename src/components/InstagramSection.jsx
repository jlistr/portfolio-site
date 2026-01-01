function InstagramSection({ handle = "@anaissoualmia" }) {
  return (
    <section className="py-24 text-center">
      <a 
        href={`https://instagram.com/${handle.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
      >
        Instagram
      </a>
    </section>
  )
}

export default InstagramSection
