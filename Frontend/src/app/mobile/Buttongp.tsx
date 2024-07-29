
<style>
  @import url('https://fonts.cdnfonts.com/css/cooper-black');
</style>

export default function Buttongp({ text }) {
  return (
    <button style={{ 
      background: "#2445B5", 
      border: '3px solid', 
      width: '208px', 
      height: '52px', 
      borderRadius: '12px',
      borderColor: '#003874', 
      fontSize: '24px',
      marginBottom:'32px',
      color:'white',
      fontFamily:'Cooper Black',   
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      {text}
    </button>
  );
}
