# Piyano Çalma Uygulaması
Klavyeyle veya mouse ile tarayıcı üzerinden piyano çalmanızı sağlayan web uygulamasıdır.

## Demo
Uygulamanın demosu:
https://piano-nextjs.vercel.app

## Not
   Reactjs ile yaptığım projenin netlify demosunda, seste gecikme oluyordu, projeyi nextjs'e taşıyıp vercel demosunu çıkarınca bu gecikme sorunu ortadan kalktı, şuan sorunsuz çalışıyor. 

## Uygulamayı Çalıştırma

Aşağıdaki komutla projeyi klonlayın.

    git clone https://github.com/bgryks18/piano-nextjs.git
Ve proje klasörüne geçin

    cd piano-nextjs

Uygulamanın çalışabilmesi için gerekli paketlerin kurulu olması gerekir. 
Aşağıdaki komut ile uygulamanın bağımlı olduğu paketlerin hepsi kurulur.

    npm install


## Uygulamayı Test Etme

    npm start
  komutu ile uygulamayı çalıştırın ve sunucu adresinizi tarayıcıda açın.
  Web sayfanız açıldığında piyano keyboard'u sizi karşılayacaktır. Her piyano tuşunun, tetikleneceği klavye tuşu üzerinde yazıyor. Bu tuşlara basarak veya mouse ile tıklayarak notayı çaldırabilirsiniz. Büyük tuşları kullanmak için shifte basılı tutabilirsiniz. İsterseniz kendiniz bu tuşları **/utils/keys.js** dosyasından kendinize göre değiştirebilirsiniz.
  
## Uygulama Nasıl Çalışıyor
     /utils/sounds/

dizininde ses dosyaları tutuluyor.

     /utils/keys.js 
   dosyasında belirlenip export edilen obje, ses dosyası ismine karşılık gelen klavye tuşlarını belirliyor.
   Property ismi, ses dosyası ismini, 
   Property değeri, hangi tuşa basıldığında çalacağını belirtiyor.
   
   Property değerini klavyedeki bir tuş olarak tanımlayabilirsiniz, örneğin 'q' gibi. Bu string olmalıdır.
   
   Ya da bir keyCode olarak tanımlayabilirsiniz, örneğin 81 gibi. Bu number olmalıdır.
   
   Eğer **/utils/sounds/** dizinine bir ses dosyası ekleyip, **/utils/keys.js** dosyasındaki objeye dosya ismiyle aynı bir property eklerseniz, uygulamada bir piano tuşu daha oluşacaktır. Yani daha ince veya daha kalın bir nota tonu eklemenin yolu budur.
   
## Mobil Uyumluluk
   Tasarım, 400 pixel'e kadar uyumludur. Daha altında bozulur. Ancak işlev olarak mobilde çalıştırmaya uygun değildir.
