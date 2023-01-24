import React from 'react'
import { View, Text,TextInput } from 'react-native'
import { styles } from './Styles'


const  FromField = ({field,label,secureTextEntry,autoCapitalize,values,touched,errors,handleChange,handleBlur}) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
      style={styles.input}
      value={values[field]}
      onChangeText={handleChange(field)}
      onBlur={handleBlur(field)}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize || "none"}
      />
      {touched[field] && errors[field]?(
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      ):null}
    </View>
  )
}
export default FromField

