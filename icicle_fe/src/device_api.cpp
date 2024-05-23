
#include <memory>
#include <unordered_map>
#include <string>
#include <stdexcept>
#include <iostream>

#include "device.h"
#include "device_api.h"

using namespace icicle;

class DeviceAPIRegistry
{
  static inline std::unordered_map<std::string, std::shared_ptr<DeviceAPI>> apiMap;

public:
  static void registerDeviceAPI(const std::string& deviceType, std::shared_ptr<DeviceAPI> api)
  {
    if (apiMap.find(deviceType) != apiMap.end()) {
      throw std::runtime_error("Attempting to register a duplicate API for device type: " + deviceType);
    }
    apiMap[deviceType] = api;
  }

  static std::shared_ptr<DeviceAPI> getDeviceAPI(const Device& device)
  {
    auto it = apiMap.find(device.type);
    if (it != apiMap.end()) {
      return it->second;
    } else {
      throw std::runtime_error("Device API not found for type: " + std::string(device.type));
    }
  }

  static std::list<std::string> getRegisteredDevices()
  {
    std::list<std::string> registered_devices;
    for (const auto& device : apiMap) {
      registered_devices.push_back(device.first);
    }
    return registered_devices;
  }
};

extern "C" DeviceAPI* getDeviceAPI(const Device& device) { return DeviceAPIRegistry::getDeviceAPI(device).get(); }

extern "C" void registerDeviceAPI(const std::string& deviceType, std::shared_ptr<DeviceAPI> api)
{
  std::cout << "deviceAPI registered for " << deviceType << std::endl;
  DeviceAPIRegistry::registerDeviceAPI(deviceType, api);
}

extern "C" std::list<std::string> getRegisteredDevices() { return DeviceAPIRegistry::getRegisteredDevices(); }
