টুর্নামেন্ট অ্যাপ — GitHub Pages ও Android APK

এই প্যাকেজে আছে:
- index.html (আপনার index-1.html থেকে নাম পরিবর্তন করা)
- firebase-messaging-sw.js
- manifest.webmanifest ও icons/ (PWA ইনস্টল/প্যাকেজিংয়ের জন্য)

GitHub মোবাইল ধাপ:
1. github.com-এ সাইন ইন করে New repository চাপুন। নাম দিন sk-muzammel-tournament। Public রাখলে GitHub Pages ফ্রি ব্যবহার করা যাবে।
2. Add file → Upload files থেকে এই ZIP-এর ভেতরের ফাইলগুলো আপলোড করুন (ZIP ফাইলটি নিজে নয়); index.html, firebase-messaging-sw.js, manifest.webmanifest এবং icons ফোল্ডার root-এ থাকতে হবে।
3. Commit changes করুন।
4. Repository → Settings → Pages → Build and deployment: Deploy from a branch; Branch: main; Folder: /(root) → Save।
5. Pages-এর দেওয়া https://...github.io/... ঠিকানা Chrome-এ খুলে লগইন করুন, তারপর Enable Push চাপুন এবং Allow দিন।
6. APK: https://www.pwabuilder.com/ খুলে আপনার GitHub Pages URL দিন → Start → Android package তৈরি করুন। APK build/Signing অপশন UI অনুযায়ী অনুসরণ করুন।

নোটিফিকেশন গুরুত্বপূর্ণ:
- Firebase config ও VAPID key বর্তমান ফাইলের notification-c30ee প্রজেক্টের। Firebase Console-এ Cloud Messaging Web Push key একই হতে হবে।
- Firebase Authentication-এ আপনার GitHub Pages domain অনুমোদন করুন: Firebase Console → Authentication → Settings → Authorized domains।
- Realtime Database Rules নিরাপদ রাখুন; test করার আগে public write access দেবেন না।
- শুধু টোকেন সংরক্ষণ করলেই নোটিফিকেশন পাঠানো হয় না। FCM থেকে পাঠানোর জন্য নিরাপদ server/Cloud Functions বা Firebase Console-এর উপযুক্ত workflow লাগবে। Admin SDK service-account JSON কখনো GitHub-এ আপলোড করবেন না।
- Android-এ অনুমতি Chrome/TWA-এর মাধ্যমে ব্যবহারকারীর কাছ থেকে নিতে হবে; ব্যবহারকারী Allow না করলে নোটিফিকেশন আসবে না। Background notification কাজ করতে FCM message-এ notification payload থাকতে হবে।
- APK তৈরি করা এই ZIP-এর মধ্যে অন্তর্ভুক্ত নয়; PWABuilder থেকে আলাদাভাবে generate করতে হবে।
