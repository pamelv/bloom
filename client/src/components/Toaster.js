import toaster from "toasted-notes";
import "toasted-notes/src/styles.css"; // optional styles


const Toaster = () => (
  <button
    onClick={() => {
      toaster.notify("Bookmark saved!", {
        duration: 2000
      });
    }}
  >
  </button>
);

export default Toaster;