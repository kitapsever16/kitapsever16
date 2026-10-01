export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  fullTextContext: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Suç ve Ceza",
    author: "Fyodor Dostoyevski",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    description: "Fakir bir öğrenci olan Raskolnikov'un işlediği cinayet ve sonrasında çektiği vicdan azabını anlatan psikolojik bir başyapıt.",
    fullTextContext: "Suç ve Ceza, Fyodor Dostoyevski tarafından yazılmış bir romandır. Baş karakter Rodion Romanoviç Raskolnikov, fakir bir eski hukuk öğrencisidir. St. Petersburg'da yaşar. Topluma zararlı olduğunu düşündüğü tefeci bir kadını öldürerek parasını almayı ve bu parayla hem kendi eğitimini tamamlamayı hem de insanlığa faydalı işler yapmayı planlar. Ancak cinayeti işledikten sonra büyük bir vicdan azabı ve paranoya yaşamaya başlar. Sonya adında iyi kalpli bir fahişe ile tanışır. Raskolnikov'u suçunu itiraf etmesi için ikna eden kişi Sonya'dır. Raskolnikov sonunda polise teslim olur ve Sibirya'ya sürülür. Roman, insanın vicdanıyla olan savaşını, kefareti ve sevginin iyileştirici gücünü anlatır."
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    coverUrl: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=600&auto=format&fit=crop",
    description: "Büyük Birader'in her şeyi izlediği, özgür düşüncenin yasaklandığı distopik bir geleceği tasvir eden kült roman.",
    fullTextContext: "1984, George Orwell tarafından yazılmış distopik bir romandır. Roman, Okyanusya adlı totaliter bir devlette geçer. Parti'nin lideri 'Büyük Birader'dir (Big Brother) ve her yerde 'Büyük Birader Seni İzliyor' afişleri vardır. Baş karakter Winston Smith, Gerçek Bakanlığı'nda (Miniyer) çalışır ve görevi geçmişteki haberleri ve tarihi Parti'nin şu anki politikalarına uyacak şekilde değiştirmektir. Toplum sürekli olarak 'Tele-ekranlar' ve Düşünce Polisi tarafından izlenmektedir. Winston, sisteme içten içe isyan eder ve Julia adında genç bir kadınla yasak bir aşk yaşamaya başlar. İkisi, sisteme karşı direnen 'Kardeşlik' (The Brotherhood) adlı gizli bir örgüte katıldıklarını sanırlar, ancak aslında tuzağa düşürülmüşlerdir. O'Brien adında üst düzey bir Parti üyesi tarafından yakalanır ve Sevgi Bakanlığı'nda (Minisev) ağır işkencelerden geçirilirler. Winston'ın iradesi kırılır ve romanın sonunda Parti'ye tamamen teslim olur, artık sadece Büyük Birader'i sevdiğini fark eder."
  },
  {
    id: "3",
    title: "Küçük Prens",
    author: "Antoine de Saint-Exupéry",
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    description: "Bir çocuğun gözünden büyüklerin dünyasının anlamsızlığına ve sevgi ile dostluğun önemine dair felsefi bir masal.",
    fullTextContext: "Küçük Prens, Antoine de Saint-Exupéry'nin en ünlü eseridir. Hikaye, Sahra Çölü'ne uçağı düşen bir pilotun ağzından anlatılır. Pilot, çölde Küçük Prens adında küçük bir çocukla karşılaşır. Küçük Prens, B612 Asteroidi adında küçük bir gezegenden gelmektedir. Gezegeninde çok sevdiği ama aynı zamanda çok kaprisli olan bir gülü, temizlemesi gereken üç volkanı ve kökleriyle gezegeni parçalayabilecek baobab ağaçları vardır. Küçük Prens, gülüyle yaşadığı anlaşmazlık sonucu evrensel bir yolculuğa çıkar. Çeşitli asteroitleri ziyaret eder ve her birinde büyüklerin anlamsız dünyasını temsil eden yetişkinlerle (bir kral, kendini beğenmiş bir adam, bir sarhoş, bir iş adamı, bir fener bekçisi ve bir coğrafyacı) karşılaşır. Son olarak Dünya'ya gelir. Burada bir tilki ile tanışır ve tilki ona evcilleştirmenin (bağ kurmanın) ve asıl önemli olanın gözle görülemeyeceğini, kalple bakmak gerektiğini öğretir. Küçük Prens, Dünya'daki güllerin kendi gülüne benzediğini ama kendi gülüne emek verdiği için onun eşsiz olduğunu anlar. Sonunda, gezegenine ve çok özlediği gülüne dönmek için bir yılanın kendini ısırmasına izin vererek bedeninden ayrılır."
  }
];
