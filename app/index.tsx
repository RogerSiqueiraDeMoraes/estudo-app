import { Button, Text, View } from 'react-native';
import app from '../firebaseConfig';

import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default function App() {

  const salvarEstudo = async () => {
    try {
      await addDoc(collection(db, "estudos"), {
        materia: "Matemática",
        assunto: "Função",
        feitas: 20,
        acertos: 15,
        data: new Date()
      });
      console.log("Salvo!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App de Estudos 📚</Text>
      <Button title="Salvar exemplo" onPress={salvarEstudo} />
    </View>
  );
}