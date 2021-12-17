const status = [];

status.push('all');

activeStatus = 'all' || 'actived' || 'noactive';


const map = {
  actived: true,
  noactive: false,
}

if (activeStatus !== 'all') {
  value.is_activated = map[activeStatus]
}


setActiveStatus = (status) => {
  this.activeStatus = status;
}
