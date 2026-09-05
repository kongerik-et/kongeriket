import base64,sys
from pathlib import Path
path=Path(sys.argv[1]); data=base64.b64decode(sys.argv[2]); path.parent.mkdir(parents=True,exist_ok=True); path.write_bytes(data); print(path,len(data))
