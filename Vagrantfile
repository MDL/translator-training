# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  #config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    #vb.gui = true

    # Customize the amount of memory on the VM:
    vb.memory = "2048"
    vb.cpus = 2
  end

  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL

  # Base setup
  config.vm.provision :shell, path: "vagrant/base.sh"

  # R setup
  config.vm.provision :file, source: "vagrant/files/r/r.list", destination: "/tmp/r.list"
  config.vm.provision :file, source: "vagrant/files/r/Rprofile.site", destination: "/tmp/Rprofile.site"
  config.vm.provision :file, source: "vagrant/files/r/r-install-packages.R", destination: "/tmp/r-install-packages.R"
  config.vm.provision :shell, path: "vagrant/r.sh"

  # MySQL setup
  config.vm.provision :shell, path: "vagrant/mysql.sh"

  # golang setup
  config.vm.provision :file, source: "vagrant/files/golang/golang.sh", destination: "/tmp/golang.sh"
  config.vm.provision :shell, path: "vagrant/golang.sh"

  # nginx setup
  config.vm.provision :file, source: "vagrant/files/nginx/nginx.conf", destination: "/tmp/nginx.conf"
  config.vm.provision :file, source: "vagrant/files/nginx/nginx-movies-pipeline.conf", destination: "/tmp/nginx-movies-pipeline.conf"
  config.vm.provision :shell, path: "vagrant/nginx.sh"

  # java setup
  config.vm.provision :shell, path: "vagrant/java.sh"

  # create users
  config.vm.provision :shell, path: "vagrant/useradd.sh"

  # create main appuser
  config.vm.provision :file, source: "vagrant/files/appuser/bashrc", destination: "/tmp/bashrc-appuser"
  config.vm.provision :file, source: "vagrant/files/appuser/profile", destination: "/tmp/profile-appuser"
  config.vm.provision :shell, path: "vagrant/appuser.sh"

  # drake setup
  config.vm.provision :shell, path: "vagrant/drake.sh"

  # rvm setup
  config.vm.provision :shell, path: "vagrant/rvm.sh", args: "stable"

  # ruby setup
  config.vm.provision :shell, path: "vagrant/ruby.sh"
end
