import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

type CustomAlertProps = {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
};

const CustomAlert: React.FC<CustomAlertProps> = ({ visible, onClose, onLogin }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertTitle}>Need to explore the app?</Text>
          <Text style={styles.alertMessage}>Please login or signup with your account</Text>
          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default CustomAlert;