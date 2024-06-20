import React from 'react';
import { Text, Image, View, StyleSheet, Button, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1YIXXpmxTmJKFGNrKeMdJmP9FMiEu6VLoQ&s'
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/84693/original/inspirasi_gaun_pengantin_muslimah_26.jpg'
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Selamat Datang di Butik Zeeyana</Text>
        <Text style={styles.subtitle}>Selamat Berbelanja dan Nikmati belanjanya</Text>
        <View style={styles.buttonContainer}>
          <Button title="Lihat Produk" onPress={() => console.log("Button pressed")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Warna transparan untuk membuat teks lebih mudah dibaca
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white', 
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});