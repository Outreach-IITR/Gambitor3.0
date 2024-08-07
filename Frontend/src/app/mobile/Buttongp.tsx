
{/* <style>
  @import url('https://fonts.cdnfonts.com/css/cooper-black');
</style> */}

interface ButtongpProps {
  text: string;
}


export default function Buttongp({text}: ButtongpProps) {
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
      {text.replace(/'/g, '&apos;')}
    </button>
  );
}
