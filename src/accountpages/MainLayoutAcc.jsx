import React from 'react'

const MainLayoutAcc = () => {
  const { id } = useParams();
  // Menggabungkan semua produk dari berbagai kategori
  const allProducts = product.flatMap(category => category.items);

  // Mencari produk berdasarkan id
  const product = allProducts.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 text-lg">Produk tidak ditemukan</div>;
  }

  return (
    <section className='w-full bg-white h-screen pt-20 md:pt-30'>
      <div className=''>
      <img
              src={product.image}
              alt={product.name}
              className="sm:w-3/4 w-full h-auto object-cover rounded-lg"
            />
      </div>
    </section>
  )
}

export default MainLayoutAcc