const {app} = require('electron');
const isDev = require('electron-is-dev')
const AppWindow = require('./src/AppWindow');
const path = require('path');


let mainvideoWin,backvieoWin,oprWin,mapWin,centerWin;
function createWindow () {
  const mainvideoWinConfig = {
    width: 1040,
    height: 768,   
  }
  const mainurlLocation = isDev ? 'http://localhost:3000/#/main' : `file://${path.join(__dirname, './index.html#/main')}`
  mainvideoWin = new AppWindow(mainvideoWinConfig,mainurlLocation)

  const centerWinConfig = {
    width: 836,
    height: 363,   
  }
  const centerurlLocation = isDev ? 'http://localhost:3000/#/center' : `file://${path.join(__dirname, './index.html#/center')}`
  centerWin = new AppWindow(centerWinConfig,centerurlLocation) 

  const backvieoWinConfig = {
    width: 1040,
    height: 768,   
  }
  const backurlLocation = isDev ? 'http://localhost:3000/#/back' : `file://${path.join(__dirname, './index.html#/back')}`
  backvieoWin = new AppWindow(backvieoWinConfig,backurlLocation) 


  const oprWinConfig = {
    width: 468,
    height: 836,   
  }
  const oprurlLocation = isDev ? 'http://localhost:3000/#/opr' : `file://${path.join(__dirname, './index.html#/opr')}`
  oprWin = new AppWindow(oprWinConfig,oprurlLocation) 


  const mapWinConfig = {
    width: 836,
    height: 468,   
  }
  const mapurlLocation = isDev ? 'http://localhost:3000/#/map' : `file://${path.join(__dirname, './index.html#/map')}`
  mapWin = new AppWindow(mapWinConfig,mapurlLocation)

  const winMap = [ mainvideoWin,backvieoWin,oprWin,mapWin,centerWin];
  winMap.forEach((item)=>{
    item.webContents.openDevTools();
    item.on('closed', () => {
      item = null
    })
  })
}





app.commandLine.appendSwitch('ignore-certificate-errors')
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainvideoWin === null) createWindow()
})
