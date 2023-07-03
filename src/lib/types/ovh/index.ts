
// @ts-nocheck
/**
 * Types for OVHcloud API
 * This file has been automatically created. Do not edit it.
 * Creation date: 2023-07-03T07:20:19.664Z
 * Author: Jonathan Perchoc 
*/
export namespace ovhapi {
    export namespace cloud {
        export namespace authentication {
            /** Catalog */
            export interface Catalog {
                /** endpoints */
                endpoints: cloud.authentication.Endpoint[];
                /** id */
                id: string;
                /** type */
                type: string;
            }
            /** Domain */
            export interface Domain {
                /** name */
                name: string;
            }
            /** Endpoint */
            export interface Endpoint {
                /** id */
                id: string;
                /** interface */
                interface: string;
                /** legacy_endpoint_id */
                legacy_endpoint_id: string;
                /** region_id */
                region_id: string;
                /** service_id */
                service_id: string;
                /** url */
                url: string;
            }
            /** OpenstackToken */
            export interface OpenstackToken {
                /** catalog */
                catalog: cloud.authentication.Catalog[];
                /** expires_at */
                expires_at: string;
                /** issued_at */
                issued_at: string;
                /** methods */
                methods: string[];
                /** project */
                project: cloud.authentication.TokenProject;
                /** roles */
                roles: cloud.authentication.Role[];
                /** user */
                user: cloud.authentication.UserToken;
            }
            /** Role */
            export interface Role {
                /** id */
                id: string;
                /** name */
                name: string;
            }
            /** Token */
            export interface Token {
                /** X-Auth-Token */
                "X-Auth-Token": string;
                /** token */
                token: cloud.authentication.OpenstackToken;
            }
            /** TokenProject */
            export interface TokenProject {
                /** domain */
                domain: cloud.authentication.Domain;
                /** id */
                id: string;
                /** name */
                name: string;
            }
            /** UserToken */
            export interface UserToken {
                /** domain */
                domain: cloud.authentication.Domain;
                /** id */
                id: string;
                /** name */
                name: string;
            }
        }
        export namespace billingView {
            /** BandwidthInstance */
            export interface BandwidthInstance {
                /** Total bandwidth in GiB */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** BandwidthStorage */
            export interface BandwidthStorage {
                /** Total bandwidth in GiB */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** Component */
            export interface Component {
                /** Name of the component */
                name: string;
                /** Total quantity for the component */
                quantity: cloud.billingView.Quantity;
                /** Total price for this component */
                totalPrice: number;
            }
            /** HourlyInstance */
            export interface HourlyInstance {
                /** Details about hourly instances */
                details: cloud.billingView.HourlyInstanceDetail[];
                /** Hours of run instances */
                quantity: cloud.billingView.Quantity;
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: number;
            }
            /** HourlyInstanceBandwidth */
            export interface HourlyInstanceBandwidth {
                /** Instance incoming bandwidth details */
                incomingBandwidth ? : cloud.billingView.BandwidthInstance;
                /** Instance outgoing bandwidth details */
                outgoingBandwidth ? : cloud.billingView.BandwidthInstance;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: number;
            }
            /** HourlyInstanceDetail */
            export interface HourlyInstanceDetail {
                /** Instance ID */
                instanceId: string;
                /** Hours of run instances */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** HourlyInstanceOption */
            export interface HourlyInstanceOption {
                /** Details about hourly instances option */
                details: cloud.billingView.HourlyInstanceOptionDetail[];
                /** Quantity of instance hours running with this option */
                quantity: cloud.billingView.Quantity;
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: number;
            }
            /** HourlyInstanceOptionDetail */
            export interface HourlyInstanceOptionDetail {
                /** Instance ID */
                instanceId: string;
                /** Quantity of instance hours running with this option */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** HourlyResources */
            export interface HourlyResources {
                /** Details about hourly instances */
                instance: cloud.billingView.HourlyInstance[];
                /** Details about instances bandwidth consumption */
                instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
                /** Details about hourly instances options */
                instanceOption: cloud.billingView.HourlyInstanceOption[];
                /** Details about hourly snapshots */
                snapshot: cloud.billingView.HourlySnapshot[];
                /** Details about hourly storage */
                storage: cloud.billingView.HourlyStorage[];
                /** Details about hourly volumes */
                volume: cloud.billingView.HourlyVolume[];
            }
            /** HourlySnapshot */
            export interface HourlySnapshot {
                /** Instance snapshot details */
                instance ? : cloud.billingView.InstanceSnapshot;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: number;
                /** Volume snapshot details */
                volume ? : cloud.billingView.VolumeSnapshot;
            }
            /** HourlyStorage */
            export interface HourlyStorage {
                /** Bucket Name */
                bucketName ? : string;
                /** Storage incoming bandwidth details */
                incomingBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage incoming internal bandwidth details */
                incomingInternalBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage outgoing bandwidth details */
                outgoingBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Storage outgoing internal bandwidth details */
                outgoingInternalBandwidth ? : cloud.billingView.BandwidthStorage;
                /** Region */
                region: string;
                /** Information about stored data */
                stored ? : cloud.billingView.StoredStorage;
                /** Total price */
                totalPrice: number;
                /** Storage type */
                type: cloud.billingView.StorageTypeEnum;
            }
            /** HourlyVolume */
            export interface HourlyVolume {
                /** Detail about volume consumption */
                details: cloud.billingView.HourlyVolumeDetail[];
                /** Total GiBh of volume */
                quantity: cloud.billingView.Quantity;
                /** Region */
                region: string;
                /** Total price */
                totalPrice: number;
                /** Volume type */
                type: string;
            }
            /** HourlyVolumeDetail */
            export interface HourlyVolumeDetail {
                /** GiBh of volume */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
                /** Volume ID */
                volumeId: string;
            }
            /** InstanceSnapshot */
            export interface InstanceSnapshot {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyCertification */
            export interface MonthlyCertification {
                /** Details about certifications */
                details: cloud.billingView.MonthlyCertificationDetail[];
                /** Certification reference */
                reference: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyCertificationDetail */
            export interface MonthlyCertificationDetail {
                /** Certification activation */
                activation: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyInstance */
            export interface MonthlyInstance {
                /** Details about monthly instances */
                details: cloud.billingView.MonthlyInstanceDetail[];
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyInstanceDetail */
            export interface MonthlyInstanceDetail {
                /** Monthly instance activation */
                activation: string;
                /** Instance ID */
                instanceId: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyInstanceOption */
            export interface MonthlyInstanceOption {
                /** Details about monthly instances */
                details: cloud.billingView.MonthlyInstanceOptionDetail[];
                /** Instance reference */
                reference: string;
                /** Instance region */
                region: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyInstanceOptionDetail */
            export interface MonthlyInstanceOptionDetail {
                /** Instance ID */
                instanceId: string;
                /** Total price */
                totalPrice: number;
            }
            /** MonthlyResources */
            export interface MonthlyResources {
                /** Details about certifications */
                certification ? : cloud.billingView.MonthlyCertification[];
                /** Details about monthly instances */
                instance: cloud.billingView.MonthlyInstance[];
                /** Details about monthly instances options */
                instanceOption: cloud.billingView.MonthlyInstanceOption[];
            }
            /** Quantity */
            export interface Quantity {
                /** Quantity unit */
                unit: cloud.billingView.UnitQuantityEnum;
                /** Quantity value */
                value: number;
            }
            /** RegionalizedResource */
            export interface RegionalizedResource {
                /** List of components */
                components: cloud.billingView.Component[];
                /** Region of the resource */
                region: string;
            }
            /** StorageTypeEnum */
            export enum StorageTypeEnum {
                "pca" = "pca",
                "pcs" = "pcs",
                "storage-coldarchive" = "storage-coldarchive",
                "storage-high-perf" = "storage-high-perf",
                "storage-standard" = "storage-standard"
            }
            /** StoredStorage */
            export interface StoredStorage {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
            /** TypedResources */
            export interface TypedResources {
                /** Resources per region */
                resources: cloud.billingView.RegionalizedResource[];
                /** Total price */
                totalPrice: number;
                /** Type of the resources */
                type: string;
            }
            /** UnitQuantity */
            export enum UnitQuantityEnum {
                "GiB" = "GiB",
                "GiBh" = "GiBh",
                "Hour" = "Hour",
                "Minute" = "Minute",
                "Second" = "Second",
                "Unit" = "Unit"
            }
            /** UsedCredit */
            export interface UsedCredit {
                /** Credit description */
                description: string;
                /** Credit ID */
                id: number;
                /** Total credit used */
                usedAmount: number;
            }
            /** UsedCredits */
            export interface UsedCredits {
                /** Details about credits that will be used */
                details: cloud.billingView.UsedCredit[];
                /** Total credit that will be used to pay the bill */
                totalCredit: number;
            }
            /** VolumeSnapshot */
            export interface VolumeSnapshot {
                /** GiBh stored */
                quantity: cloud.billingView.Quantity;
                /** Total price */
                totalPrice: number;
            }
        }
        export namespace capabilities {
            /** Public Cloud products availability */
            export interface Availability {
                /** Plan availability */
                plans: cloud.capabilities.AvailabilityPlan[];
                /** Product availability */
                products: cloud.capabilities.AvailabilityProduct[];
            }
            /** Public Cloud plan availability */
            export interface AvailabilityPlan {
                /** Plan code */
                code: string;
                /** Plan is available on those regions */
                regions: cloud.capabilities.AvailabilityRegion[];
            }
            /** Public Cloud product availability */
            export interface AvailabilityProduct {
                /** Product name */
                name: string;
                /** Product is available on those regions */
                regions: cloud.capabilities.AvailabilityRegion[];
            }
            /** Details about a region */
            export interface AvailabilityRegion {
                /** Region continent code */
                continentCode: cloud.RegionContinentEnum;
                /** Location of the datacenter where the region is */
                datacenter: string;
                /** Region is enabled */
                enabled: boolean;
                /** Region name */
                name: string;
            }
        }
        export namespace common {
            /** Voucher validity range */
            export interface VoucherValidity {
                /** Valid from */
                from ? : string;
                /** Valid to */
                to ? : string;
            }
        }
        export namespace containerRegistry {
            export namespace registry {
                /** Region of the registry */
                export enum RegionEnum {
                    "GRA7" = "GRA7"
                }
                /** Managed docker registry */
                export interface Registry {
                    /** Registry creation date */
                    createdAt: string;
                    /** Registry ID */
                    id: string;
                    /** Registry name */
                    name: string;
                    /** Project ID of your registry */
                    projectID: string;
                    /** Region of the registry */
                    region: cloud.containerRegistry.registry.RegionEnum;
                    /** Registry status */
                    status: cloud.containerRegistry.registry.StatusEnum;
                    /** Registry last update date */
                    updatedAt: string;
                    /** Access url of the registry */
                    url: string;
                    /** Version of your registry */
                    version: string;
                }
                /** Status of the registry */
                export enum StatusEnum {
                    "ERROR" = "ERROR",
                    "READY" = "READY",
                    "DELETED" = "DELETED",
                    "SUSPENDED" = "SUSPENDED",
                    "INSTALLING" = "INSTALLING",
                    "UPDATING" = "UPDATING",
                    "RESTORING" = "RESTORING",
                    "SUSPENDING" = "SUSPENDING",
                    "DELETING" = "DELETING"
                }
            }
            export namespace user {
                /** Docker registry user */
                export interface User {
                    /** User email */
                    email: string;
                    /** User ID */
                    id: string;
                    /** User password */
                    password ? : string;
                    /** User name */
                    user: string;
                }
            } /** The container registry capability for a single region */
            export interface Capability {
                /** Available plans in the region */
                plans: cloud.containerRegistry.Plan[];
                /** The region name */
                regionName: string;
            }
            /** Features list, enabled or not */
            export interface Features {
                /** Vulnerability scanning */
                vulnerability: boolean;
            }
            /** Limitation of a docker registry */
            export interface Limits {
                /** Docker image storage limits in bytes */
                imageStorage: number;
                /** Parallel requests on Docker image API (/v2 Docker registry API) */
                parallelRequest: number;
            }
            /** Plan of the registry */
            export interface Plan {
                /** Plan code from catalog */
                code: string;
                /** Plan creation date */
                createdAt: string;
                /** Features of the plan */
                features: cloud.containerRegistry.Features;
                /** Plan ID */
                id: string;
                /** Plan name */
                name: string;
                /** Container registry limits */
                registryLimits: cloud.containerRegistry.Limits;
                /** Plan last update date */
                updatedAt: string;
            }
            /** Missing description */
            export interface PlanUpdate {
                /** Plan ID to apply to the registry */
                planID: string;
            }
            /** Managed docker registry */
            export interface Registry {
                /** Registry creation date */
                createdAt: string;
                /** Registry ID */
                id: string;
                /** Registry name */
                name: string;
                /** Project ID of your registry */
                projectID: string;
                /** Region of the registry. */
                region: string;
                /** Current size of the registry (bytes) */
                size: number;
                /** Registry status */
                status: cloud.containerRegistry.StatusEnum;
                /** Registry last update date */
                updatedAt: string;
                /** Access url of the registry */
                url: string;
                /** Version of your registry */
                version: string;
            }
            /** Status of the registry */
            export enum StatusEnum {
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "ERROR" = "ERROR",
                "INSTALLING" = "INSTALLING",
                "READY" = "READY",
                "RESTORING" = "RESTORING",
                "SUSPENDED" = "SUSPENDED",
                "SUSPENDING" = "SUSPENDING",
                "UPDATING" = "UPDATING"
            }
            /** Docker registry user */
            export interface User {
                /** User email */
                email: string;
                /** User ID */
                id: string;
                /** User password */
                password ? : string;
                /** User name */
                user: string;
            }
        }
        export namespace flavor {
            /** Flavor capability */
            export interface Capability {
                /** Is the capability enabled */
                enabled: boolean;
                /** Name of the capability */
                name: cloud.flavor.CapabilityNameEnum;
            }
            /** Enum values for flavor capabilities names */
            export enum CapabilityNameEnum {
                "failoverip" = "failoverip",
                "resize" = "resize",
                "snapshot" = "snapshot",
                "volume" = "volume"
            }
            /** Flavor */
            export interface Flavor {
                /** Available in stock */
                available: boolean;
                /** Capabilities of the flavor */
                capabilities: cloud.flavor.Capability[];
                /** Number of disks */
                disk: number;
                /** Flavor id */
                id: string;
                /** Max capacity of inbound traffic in Mbit/s */
                inboundBandwidth ? : number;
                /** Flavor name */
                name: string;
                /** OS to install on */
                osType: string;
                /** Max capacity of outbound traffic in Mbit/s */
                outboundBandwidth ? : number;
                /** Plan codes to order instances */
                planCodes: cloud.flavor.FlavorPlanCodes;
                /** Number instance you can spawn with your actual quota */
                quota: number;
                /** Ram quantity (Gio) */
                ram: number;
                /** Flavor region */
                region: string;
                /** Flavor type */
                type: string;
                /** Number of VCPUs */
                vcpus: number;
            }
            /** FlavorPlanCodes */
            export interface FlavorPlanCodes {
                /** Plan code to order hourly instance */
                hourly ? : string;
                /** Plan code to order monthly instance */
                monthly ? : string;
            }
        }
        export namespace image {
            /** Image */
            export interface Image {
                /** Image creation date */
                creationDate: string;
                /** Image usable only for this type of flavor if not null */
                flavorType ? : string;
                /** Image id */
                id: string;
                /** Minimum disks required to use image */
                minDisk: number;
                /** Minimum RAM required to use image */
                minRam: number;
                /** Image name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Image region */
                region: string;
                /** Image size (in GiB) */
                size: number;
                /** Image status */
                status: string;
                /** Tags about the image */
                tags ? : string[];
                /** Image type */
                type: string;
                /** User to connect with */
                user: string;
                /** Image visibility */
                visibility: string;
            }
            /** OSTypeEnum */
            export enum OSTypeEnum {
                "baremetal-linux" = "baremetal-linux",
                "bsd" = "bsd",
                "linux" = "linux",
                "windows" = "windows"
            }
        }
        export namespace instance {
            export namespace CreateInput {
                export namespace Network {
                    export namespace Private {
                        export namespace GatewayCreate {
                            /** Gateway model */
                            export enum ModelEnum {
                                "l" = "l",
                                "m" = "m",
                                "s" = "s"
                            }
                        }
                        export namespace NetworkCreate {
                            /** New subnet information */
                            export interface Subnet {
                                /** Subnet range in CIDR notation */
                                cidr: string;
                                /** enableDhcp */
                                enableDhcp: boolean;
                                /** IP version */
                                ipVersion: number;
                            }
                        } /** Existing floating IP */
                        export interface FloatingIp {
                            /** Floating IP ID */
                            id: string;
                        }
                        /** Information to create a new floating IP */
                        export interface FloatingIpCreate {
                            /** Floating IP description */
                            description: string;
                        }
                        /** Existing gateway */
                        export interface Gateway {
                            /** Gateway ID */
                            id: string;
                        }
                        /** Information to create a new gateway */
                        export interface GatewayCreate {
                            /** Gateway model */
                            model: cloud.instance.CreateInput.Network.Private.GatewayCreate.ModelEnum;
                            /** Gateway name */
                            name: string;
                        }
                        /** Existing private network */
                        export interface Network {
                            /** Network ID */
                            id: string;
                            /** Existing Subnet ID */
                            subnetId: string;
                        }
                        /** Information to create a new private network */
                        export interface NetworkCreate {
                            /** Network name */
                            name: string;
                            /** New subnet information */
                            subnet: cloud.instance.CreateInput.Network.Private.NetworkCreate.Subnet;
                            /** Network vlan ID */
                            vlanId ? : number;
                        }
                    } /** Private network information */
                    export interface Private {
                        /** Existing floating IP */
                        floatingIp ? : cloud.instance.CreateInput.Network.Private.FloatingIp;
                        /** Information to create a new floating IP */
                        floatingIpCreate ? : cloud.instance.CreateInput.Network.Private.FloatingIpCreate;
                        /** Existing gateway */
                        gateway ? : cloud.instance.CreateInput.Network.Private.Gateway;
                        /** Information to create a new gateway */
                        gatewayCreate ? : cloud.instance.CreateInput.Network.Private.GatewayCreate;
                        /** Instance IP in the private network */
                        ip ? : string;
                        /** Existing private network */
                        network ? : cloud.instance.CreateInput.Network.Private.Network;
                        /** Information to create a new private network */
                        networkCreate ? : cloud.instance.CreateInput.Network.Private.NetworkCreate;
                    }
                } /** Create an autobackup workflow after instance start up */
                export interface Autobackup {
                    /** Unix Cron pattern (eg: '0 0 * * *') */
                    cron: string;
                    /** Number of backup to keep */
                    rotation: number;
                }
                /** Billing period */
                export enum BillingPeriodEnum {
                    "hourly" = "hourly",
                    "monthly" = "monthly"
                }
                /** Boot the instance from an image or a volume */
                export interface BootFrom {
                    /** Instance image id */
                    imageId ? : string;
                    /** Specify a volume id to boot from it */
                    volumeId ? : string;
                }
                /** Flavor information */
                export interface Flavor {
                    /** Instance flavor id */
                    id: string;
                }
                /** Start instance in group */
                export interface Group {
                    /** Group id */
                    id: string;
                }
                /** Networks information */
                export interface Network {
                    /** Private network information */
                    private ? : cloud.instance.CreateInput.Network.Private;
                    /** Set the new instance as public */
                    public: boolean;
                }
                /** Existing SSH Keypair */
                export interface SshKey {
                    /** SSH Keypair name */
                    name: string;
                }
                /** Information to create a new SSH Keypair */
                export interface SshKeyCreate {
                    /** SSH key name */
                    name: string;
                    /** SSH public key */
                    publicKey: string;
                }
            } /** Access */
            export interface Access {
                /** Login */
                login: string;
                /** Password */
                password: string;
                /** Application access type */
                type: string;
                /** Url */
                url: string;
            }
            /** ApplicationAccess */
            export interface ApplicationAccess {
                /** List of credentials */
                accesses: cloud.instance.Access[];
                /** Application status */
                status: cloud.instance.ApplicationAccessStateEnum;
            }
            /** ApplicationAccessStateEnum */
            export enum ApplicationAccessStateEnum {
                "installing" = "installing",
                "ok" = "ok"
            }
            /** Parameters to associate an existing floating IP to an instance */
            export interface AssociateFloatingIp {
                /** Floating IP ID */
                floatingIpId: string;
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private instance IP to associate the floating IP with */
                ip: string;
            }
            /** Autobackup params at instance creation */
            export interface AutoBackup {
                /** Unix Cron pattern (eg: '0 0 * * *') */
                cron: string;
                /** Number of backup to keep */
                rotation: number;
            }
            /** Parameters to create a floating IP for an instance */
            export interface CreateFloatingIp {
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private instance IP to associate the floating IP with */
                ip: string;
            }
            /** Instance creation input */
            export interface CreateInput {
                /** Create an autobackup workflow after instance start up */
                autobackup ? : cloud.instance.CreateInput.Autobackup;
                /** Billing period */
                billingPeriod: cloud.instance.CreateInput.BillingPeriodEnum;
                /** Boot the instance from an image or a volume */
                bootFrom: cloud.instance.CreateInput.BootFrom;
                /** Create multiple instances */
                bulk: number;
                /** Flavor information */
                flavor: cloud.instance.CreateInput.Flavor;
                /** Start instance in group */
                group ? : cloud.instance.CreateInput.Group;
                /** Instance name */
                name: string;
                /** Networks information */
                network: cloud.instance.CreateInput.Network;
                /** Existing SSH Keypair */
                sshKey ? : cloud.instance.CreateInput.SshKey;
                /** Information to create a new SSH Keypair */
                sshKeyCreate ? : cloud.instance.CreateInput.SshKeyCreate;
                /** Configuration information or scripts to use upon launch */
                userData ? : string;
            }
            /** Instance */
            export interface Instance {
                /** Instance creation date */
                created: string;
                /** Instance outgoing network traffic for the current month (in bytes) */
                currentMonthOutgoingTraffic ? : number;
                /** Instance flavor id */
                flavorId: string;
                /** Instance id */
                id: string;
                /** Instance image id */
                imageId: string;
                /** Instance IP addresses */
                ipAddresses: cloud.instance.IpAddress[];
                /** Instance monthly billing status */
                monthlyBilling ? : cloud.instance.MonthlyBilling;
                /** Instance name */
                name: string;
                /** Ids of pending public cloud operations */
                operationIds: string[];
                /** Order plan code */
                planCode ? : string;
                /** Instance id */
                region: string;
                /** Instance ssh key id */
                sshKeyId ? : string;
                /** Instance status */
                status: cloud.instance.InstanceStatusEnum;
            }
            /** InstanceDetail */
            export interface InstanceDetail {
                /** Instance creation date */
                created: string;
                /** Instance outgoing network traffic for the current month (in bytes) */
                currentMonthOutgoingTraffic ? : number;
                /** Instance flavor */
                flavor: cloud.flavor.Flavor;
                /** Instance id */
                id: string;
                /** Instance image */
                image: cloud.image.Image;
                /** Instance IP addresses */
                ipAddresses: cloud.instance.IpAddress[];
                /** Instance monthly billing status */
                monthlyBilling ? : cloud.instance.MonthlyBilling;
                /** Instance name */
                name: string;
                /** Ids of pending public cloud operations */
                operationIds: string[];
                /** Order plan code */
                planCode ? : string;
                /** Instance id */
                region: string;
                /** Rescue password if instance is in RESCUE status */
                rescuePassword ? : string;
                /** Instance SSH key */
                sshKey ? : cloud.sshkey.SshKeyDetail;
                /** Instance status */
                status: cloud.instance.InstanceStatusEnum;
            }
            /** InstanceMetrics */
            export interface InstanceMetrics {
                /** unit */
                unit: string;
                /** values */
                values: cloud.instance.InstanceMetricsValue[];
            }
            /** InstanceMetricsValue */
            export interface InstanceMetricsValue {
                /** timestamp */
                timestamp: number;
                /** value */
                value: number;
            }
            /** InstanceStatusEnum */
            export enum InstanceStatusEnum {
                "ACTIVE" = "ACTIVE",
                "BUILD" = "BUILD",
                "BUILDING" = "BUILDING",
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "ERROR" = "ERROR",
                "HARD_REBOOT" = "HARD_REBOOT",
                "MIGRATING" = "MIGRATING",
                "PASSWORD" = "PASSWORD",
                "PAUSED" = "PAUSED",
                "REBOOT" = "REBOOT",
                "REBUILD" = "REBUILD",
                "RESCUE" = "RESCUE",
                "RESCUED" = "RESCUED",
                "RESCUING" = "RESCUING",
                "RESIZE" = "RESIZE",
                "RESIZED" = "RESIZED",
                "RESUMING" = "RESUMING",
                "REVERT_RESIZE" = "REVERT_RESIZE",
                "SHELVED" = "SHELVED",
                "SHELVED_OFFLOADED" = "SHELVED_OFFLOADED",
                "SHELVING" = "SHELVING",
                "SHUTOFF" = "SHUTOFF",
                "SNAPSHOTTING" = "SNAPSHOTTING",
                "SOFT_DELETED" = "SOFT_DELETED",
                "STOPPED" = "STOPPED",
                "SUSPENDED" = "SUSPENDED",
                "UNKNOWN" = "UNKNOWN",
                "UNRESCUING" = "UNRESCUING",
                "UNSHELVING" = "UNSHELVING",
                "VERIFY_RESIZE" = "VERIFY_RESIZE"
            }
            /** Instance */
            export interface InstanceSummary {
                /** Instance id */
                id: string;
                /** Instance name */
                name: string;
            }
            /** InstanceVnc */
            export interface InstanceVnc {
                /** VNC type */
                type: string;
                /** VNC url */
                url: string;
            }
            /** IpAddress */
            export interface IpAddress {
                /** Gateway IP */
                gatewayIp ? : string;
                /** Instance IP address */
                ip: string;
                /** Network ID */
                networkId: string;
                /** Instance IP address type */
                type: string;
                /** IP version */
                version: number;
            }
            /** MetricsPeriod */
            export enum MetricsPeriodEnum {
                "lastday" = "lastday",
                "lastmonth" = "lastmonth",
                "lastweek" = "lastweek",
                "lastyear" = "lastyear",
                "today" = "today"
            }
            /** MetricsType */
            export enum MetricsTypeEnum {
                "cpu:max" = "cpu:max",
                "cpu:used" = "cpu:used",
                "mem:max" = "mem:max",
                "mem:used" = "mem:used",
                "net:rx" = "net:rx",
                "net:tx" = "net:tx"
            }
            /** MonthlyBilling */
            export interface MonthlyBilling {
                /** Monthly billing activated since */
                since: string;
                /** Monthly billing status */
                status: cloud.instance.MonthlyBillingStatusEnum;
            }
            /** MonthlyBillingStatusEnum */
            export enum MonthlyBillingStatusEnum {
                "activationPending" = "activationPending",
                "ok" = "ok"
            }
            /** Instance with region to set as monthly billing */
            export interface MonthlyInstanceBulkParams {
                /** Instance id */
                instanceId: string;
                /** Region name */
                region: string;
            }
            /** NetworkBulkParams */
            export interface NetworkBulkParams {
                /** Private or public network Id */
                networkId: string;
            }
            /** NetworkParams */
            export interface NetworkParams {
                /** Static ip (Can only be defined for private networks) */
                ip ? : string;
                /** Private or public network Id */
                networkId: string;
            }
            /** RebootTypeEnum */
            export enum RebootTypeEnum {
                "hard" = "hard",
                "soft" = "soft"
            }
            /** RescueAdminPassword */
            export interface RescueAdminPassword {
                /** Admin password to connect to your rescue server with */
                adminPassword ? : string;
            }
        }
        export namespace instanceInterface {
            /** FixedIp */
            export interface FixedIp {
                /** Ip */
                ip: string;
                /** Subnetwork Id */
                subnetId: string;
            }
            /** Interface */
            export interface Interface {
                /** List of ips of the interface */
                fixedIps: cloud.instanceInterface.FixedIp[];
                /** Interface unique identifier */
                id: string;
                /** Mac address */
                macAddress: string;
                /** Network id */
                networkId: string;
                /** Openstack state */
                state: string;
                /** Network type */
                type: string;
            }
        }
        export namespace instancegroup {
            /** InstanceGroup */
            export interface InstanceGroup {
                /** Instance group id */
                id: string;
                /** Instances ids */
                instance_ids: string[];
                /** Instance group name */
                name: string;
                /** region */
                region: string;
                /** Instance group type */
                type: cloud.instancegroup.InstanceGroupTypeEnum;
            }
            /** InstanceGroupTypeEnum */
            export enum InstanceGroupTypeEnum {
                "affinity" = "affinity",
                "anti-affinity" = "anti-affinity"
            }
        }
        export namespace ip {
            /** CloudIp */
            export interface CloudIp {
                /** Ip id */
                id: string;
                /** Ip */
                ip ? : string;
                /** Ip status */
                status: cloud.ip.IpStatusEnum;
                /** Ip type */
                type: string;
            }
            /** FailoverIp */
            export interface FailoverIp {
                /** IP block */
                block ? : string;
                /** Ip continent */
                continentCode ? : string;
                /** Ip location */
                geoloc ? : string;
                /** Ip id */
                id: string;
                /** Ip */
                ip ? : string;
                /** Current operation progress in percent */
                progress: number;
                /** Instance where ip is routed to */
                routedTo: string;
                /** Ip status */
                status: cloud.ip.IpStatusEnum;
                /** IP sub type */
                subType: cloud.ip.IpSubTypeEnum;
            }
            /** IpStatusEnum */
            export enum IpStatusEnum {
                "ok" = "ok",
                "operationPending" = "operationPending"
            }
            /** IpSubTypeEnum */
            export enum IpSubTypeEnum {
                "cloud" = "cloud",
                "ovh" = "ovh"
            }
        }
        export namespace keymanager {
            /** Key-manager certificate secret container */
            export interface Certificate {
                /** ID of the certificate */
                id: string;
                /** Name of the certificate */
                name: string;
                /** Certificate region */
                region: string;
                /** List of secrets in certificate container */
                secrets: cloud.keymanager.SecretRef[];
            }
            /** Input to create a certificate */
            export interface CertificateCreate {
                /** Content of the certificate */
                certificate: string;
                /** Content of the intermediates certificates if any */
                intermediates: string;
                /** Name of the certificate */
                name: string;
                /** Private key */
                privateKey: string;
                /** Private key passphrase if any */
                privateKeyPassphrase: string;
            }
            /** secret */
            export interface Secret {
                /** ID of the secret */
                id: string;
                /** Name of the secret */
                name: string;
                /** Secret region */
                region: string;
            }
            /** Secret reference */
            export interface SecretRef {
                /** ID of the secret */
                id: string;
                /** Name of the secret */
                name: string;
            }
        }
        export namespace kube {
            /** Managed Kubernetes Audit Logs */
            export interface AuditLogs {
                /** Temporary url expiration date */
                expirationDate: string;
                /** Temporary logs URL */
                url: string;
            }
            /** Managed Kubernetes cluster description */
            export interface Cluster {
                /** True if control-plane is up to date */
                controlPlaneIsUpToDate: boolean;
                /** Cluster creation date */
                createdAt: string;
                /** Kubernetes cluster customization */
                customization ? : cloud.ProjectKubeCustomization;
                /** Cluster ID */
                id: string;
                /** True if all nodes and control-plane are up to date */
                isUpToDate: boolean;
                /** Selected mode for kube-proxy */
                kubeProxyMode: cloud.kube.KubeProxyModeEnum;
                /** Cluster name */
                name: string;
                /** Kubernetes versions available for upgrade */
                nextUpgradeVersions ? : string[];
                /** Cluster nodes URL */
                nodesUrl: string;
                /** The private network configuration. This field is optional. */
                privateNetworkConfiguration ? : cloud.kube.PrivateNetworkConfiguration;
                /** OpenStack private network (or vrack) ID to bind to the cluster, this property is optional. This property cannot be updated afterwards, except through a cluster reset. */
                privateNetworkId ? : string;
                /** Cluster region */
                region: cloud.kube.RegionEnum;
                /** Cluster status */
                status: cloud.kube.ClusterStatusEnum;
                /** Cluster update policy */
                updatePolicy: string;
                /** Cluster last update date */
                updatedAt: string;
                /** Management URL of your cluster */
                url: string;
                /** Kubernetes version of your cluster */
                version: string;
            }
            /** Enum values for Status */
            export enum ClusterStatus {
                "INSTALLING" = "INSTALLING",
                "UPDATING" = "UPDATING",
                "RESETTING" = "RESETTING",
                "SUSPENDING" = "SUSPENDING",
                "REOPENING" = "REOPENING",
                "DELETING" = "DELETING",
                "SUSPENDED" = "SUSPENDED",
                "ERROR" = "ERROR",
                "USER_ERROR" = "USER_ERROR",
                "USER_QUOTA_ERROR" = "USER_QUOTA_ERROR",
                "READY" = "READY"
            }
            /** Enum values for Status */
            export enum ClusterStatusEnum {
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "ERROR" = "ERROR",
                "INSTALLING" = "INSTALLING",
                "MAINTENANCE" = "MAINTENANCE",
                "READY" = "READY",
                "REDEPLOYING" = "REDEPLOYING",
                "REOPENING" = "REOPENING",
                "RESETTING" = "RESETTING",
                "SUSPENDED" = "SUSPENDED",
                "SUSPENDING" = "SUSPENDING",
                "UPDATING" = "UPDATING",
                "USER_ERROR" = "USER_ERROR",
                "USER_QUOTA_ERROR" = "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR" = "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Etcd usage and quota for a given cluster */
            export interface EtcdUsage {
                /** Maximum allowed size of etcd data for the cluster (bytes) */
                quota: number;
                /** Size of etcd data used by the cluster (bytes) */
                usage: number;
            }
            /** a flavor kind */
            export interface Flavor {
                /** Flavor family */
                category: cloud.kube.FlavorCategoryEnum;
                /** Number of GPUs */
                gpus: number;
                /** Flavor name */
                name: string;
                /** Ram quantity (GB) */
                ram: number;
                /** Flavor state */
                state: cloud.kube.FlavorStateEnum;
                /** Number of VCPUs */
                vCPUs: number;
            }
            /** Enum values for category */
            export enum FlavorCategory {
                "c" = "c",
                "g" = "g",
                "t" = "t",
                "b" = "b",
                "r" = "r"
            }
            /** Enum values for category */
            export enum FlavorCategoryEnum {
                "b" = "b",
                "c" = "c",
                "d" = "d",
                "g" = "g",
                "i" = "i",
                "r" = "r",
                "t" = "t"
            }
            /** Enum values for State */
            export enum FlavorState {
                "available" = "available",
                "unavailable" = "unavailable"
            }
            /** Enum values for State */
            export enum FlavorStateEnum {
                "available" = "available",
                "unavailable" = "unavailable"
            }
            /** Enum values for scheduler parameter of cluster kubeProxy custom ipvs config */
            export enum KubeProxyIpvsSchedulerEnum {
                "dh" = "dh",
                "lc" = "lc",
                "nq" = "nq",
                "rr" = "rr",
                "sed" = "sed",
                "sh" = "sh"
            }
            /** Enum values for cluster kubeProxyMode */
            export enum KubeProxyModeEnum {
                "iptables" = "iptables",
                "ipvs" = "ipvs"
            }
            /** Kubeconfig description */
            export interface Kubeconfig {
                /** kubeconfig file */
                content: string;
            }
            /** Node installed on your cluster */
            export interface Node {
                /** Creation date */
                createdAt: string;
                /** Node deployment date */
                deployedAt ? : string;
                /** Flavor name */
                flavor: string;
                /** Node ID */
                id: string;
                /** Public Cloud instance id */
                instanceId ? : string;
                /** True if the node is up to date */
                isUpToDate: boolean;
                /** Node name */
                name: string;
                /** NodePool parent id */
                nodePoolId: string;
                /** Project id */
                projectId: string;
                /** Status */
                status: cloud.kube.NodeStatusEnum;
                /** Node last update date */
                updatedAt: string;
                /** Node version */
                version: string;
            }
            /** NodePool created on your cluster to manage your nodes */
            export interface NodePool {
                /** Enable anti affinity groups for nodes in the pool */
                antiAffinity: boolean;
                /** Enable auto-scaling for the pool */
                autoscale: boolean;
                /** Autoscaling customization parameters */
                autoscaling: cloud.kube.NodePoolAutoscaling;
                /** Number of nodes which are actually ready in the pool */
                availableNodes: number;
                /** Creation date */
                createdAt: string;
                /** Number of nodes present in the pool */
                currentNodes: number;
                /** Number of nodes you desire in the pool */
                desiredNodes: number;
                /** Flavor name */
                flavor: string;
                /** NodePool ID */
                id: string;
                /** Number of nodes you desire in the pool */
                maxNodes: number;
                /** Number of nodes you desire in the pool */
                minNodes: number;
                /** Enable monthly billing on all nodes in the pool */
                monthlyBilled: boolean;
                /** NodePool resource name */
                name: string;
                /** Project id */
                projectId: string;
                /** Status describing the state between number of nodes wanted and available ones */
                sizeStatus: cloud.kube.NodePoolSizeStatusEnum;
                /** Current status */
                status: cloud.kube.NodePoolStatusEnum;
                /** Template of nodes metadata and spec to create in the pool */
                template: cloud.kube.NodePoolTemplate;
                /** Number of nodes with latest version installed in the pool */
                upToDateNodes: number;
                /** Last update date */
                updatedAt: string;
            }
            /** Autoscaling customization parameters */
            export interface NodePoolAutoscaling {
                /** How long a node should be unneeded before it is eligible for scale down */
                scaleDownUnneededTimeSeconds: number;
                /** How long an unready node should be unneeded before it is eligible for scale down */
                scaleDownUnreadyTimeSeconds: number;
                /** Sum of cpu or memory of all pods running on the node divided by node's corresponding allocatable resource, below which a node can be considered for scale down */
                scaleDownUtilizationThreshold: number;
            }
            /** Enum values for NodePool size Status */
            export enum NodePoolSizeStatusEnum {
                "CAPACITY_OK" = "CAPACITY_OK",
                "OVER_CAPACITY" = "OVER_CAPACITY",
                "UNDER_CAPACITY" = "UNDER_CAPACITY"
            }
            /** Enum values for NodePool Status */
            export enum NodePoolStatusEnum {
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "DOWNSCALING" = "DOWNSCALING",
                "ERROR" = "ERROR",
                "INSTALLING" = "INSTALLING",
                "MAINTENANCE" = "MAINTENANCE",
                "READY" = "READY",
                "REDEPLOYING" = "REDEPLOYING",
                "REOPENING" = "REOPENING",
                "RESETTING" = "RESETTING",
                "SUSPENDED" = "SUSPENDED",
                "SUSPENDING" = "SUSPENDING",
                "UPDATING" = "UPDATING",
                "UPSCALING" = "UPSCALING",
                "USER_ERROR" = "USER_ERROR",
                "USER_NODE_NOT_FOUND_ERROR" = "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE" = "USER_NODE_SUSPENDED_SERVICE",
                "USER_QUOTA_ERROR" = "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR" = "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Managed Kubernetes nodepool template */
            export interface NodePoolTemplate {
                /** Metadata of each nodes in the pool */
                metadata: cloud.kube.NodePoolTemplateMetadata;
                /** Spec of each nodes in the pool */
                spec: cloud.kube.NodePoolTemplateSpec;
            }
            /** Metadata of each nodes in the pool */
            export interface NodePoolTemplateMetadata {
                /** Annotations to apply to each nodes */
                annotations: Record < string,
                string > ;
                /** Finalizers to apply to each nodes */
                finalizers: string[];
                /** Labels to apply to each nodes */
                labels: Record < string,
                string > ;
            }
            /** Spec of each nodes in the pool */
            export interface NodePoolTemplateSpec {
                /** Taints to apply to each nodes */
                taints: cloud.kube.Taint[];
                /** If true, set nodes as un-schedulable */
                unschedulable: boolean;
            }
            /** Enum values for Status */
            export enum NodeStatus {
                "INSTALLING" = "INSTALLING",
                "UPDATING" = "UPDATING",
                "RESETTING" = "RESETTING",
                "SUSPENDING" = "SUSPENDING",
                "REOPENING" = "REOPENING",
                "DELETING" = "DELETING",
                "SUSPENDED" = "SUSPENDED",
                "ERROR" = "ERROR",
                "USER_ERROR" = "USER_ERROR",
                "USER_QUOTA_ERROR" = "USER_QUOTA_ERROR",
                "USER_NODE_NOT_FOUND_ERROR" = "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE" = "USER_NODE_SUSPENDED_SERVICE",
                "READY" = "READY"
            }
            /** Enum values for Status */
            export enum NodeStatusEnum {
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "ERROR" = "ERROR",
                "FLAVOR_OUT_OF_STOCK_ERROR" = "FLAVOR_OUT_OF_STOCK_ERROR",
                "INSTALLING" = "INSTALLING",
                "MAINTENANCE" = "MAINTENANCE",
                "READY" = "READY",
                "REDEPLOYING" = "REDEPLOYING",
                "REOPENING" = "REOPENING",
                "RESETTING" = "RESETTING",
                "SUSPENDED" = "SUSPENDED",
                "SUSPENDING" = "SUSPENDING",
                "UPDATING" = "UPDATING",
                "USER_ERROR" = "USER_ERROR",
                "USER_NODE_NOT_FOUND_ERROR" = "USER_NODE_NOT_FOUND_ERROR",
                "USER_NODE_SUSPENDED_SERVICE" = "USER_NODE_SUSPENDED_SERVICE",
                "USER_QUOTA_ERROR" = "USER_QUOTA_ERROR",
                "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR" = "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
            }
            /** Managed Kubernetes oidc integration */
            export interface OpenIdConnect {
                /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
                caContent ? : string;
                /** Client ID */
                clientId: string;
                /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
                groupsClaim ? : string[];
                /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
                groupsPrefix ? : string;
                /** Issuer URL */
                issuerUrl: string;
                /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
                requiredClaim ? : string[];
                /** The signing algorithms accepted. Default is "RS256". */
                signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
                /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
                usernameClaim ? : string;
                /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
                usernamePrefix ? : string;
            }
            /** Enum values for OpenIdConnect signing algorithms */
            export enum OpenIdConnectSigningAlgorithmsEnum {
                "ES256" = "ES256",
                "ES384" = "ES384",
                "ES512" = "ES512",
                "PS256" = "PS256",
                "PS384" = "PS384",
                "PS512" = "PS512",
                "RS256" = "RS256",
                "RS384" = "RS384",
                "RS512" = "RS512"
            }
            /** Managed Kubernetes cluster private networking configuration */
            export interface PrivateNetworkConfiguration {
                /** If defined, all egress traffic will be routed towards this IP address, which should belong to the private network. Empty string means disabled. */
                defaultVrackGateway: string;
                /** Defines whether routing should default to using the nodes' private interface, instead of their public interface. Default is false. */
                privateNetworkRoutingAsDefault ? : boolean;
            }
            /** Enum values for available regions */
            export enum Region {
                "GRA5" = "GRA5",
                "GRA7" = "GRA7",
                "BHS5" = "BHS5"
            }
            /** Enum values for regions where cluster creation is possible, region where cluster are deployed is cloud.kube.RegionEnum */
            export enum RegionCapabilitiesEnum {
                "BHS5" = "BHS5",
                "DE1" = "DE1",
                "GRA5" = "GRA5",
                "GRA7" = "GRA7",
                "GRA9" = "GRA9",
                "SBG5" = "SBG5",
                "SGP1" = "SGP1",
                "SYD1" = "SYD1",
                "UK1" = "UK1",
                "US-EAST-VA-1" = "US-EAST-VA-1",
                "US-WEST-OR-1" = "US-WEST-OR-1",
                "WAW1" = "WAW1"
            }
            /** Enum values for regions where cluster are deployed and flavor related location. Available region for cluster creation is cloud.kube.RegionCapabilitiesEnum */
            export enum RegionEnum {
                "BHS5" = "BHS5",
                "DE1" = "DE1",
                "GRA5" = "GRA5",
                "GRA7" = "GRA7",
                "GRA9" = "GRA9",
                "SBG5" = "SBG5",
                "SGP1" = "SGP1",
                "SYD1" = "SYD1",
                "UK1" = "UK1",
                "US-EAST-VA-1" = "US-EAST-VA-1",
                "US-WEST-OR-1" = "US-WEST-OR-1",
                "WAW1" = "WAW1"
            }
            /** Enum values for worker nodes reset policy */
            export enum ResetWorkerNodesPolicy {
                "reinstall" = "reinstall",
                "delete" = "delete"
            }
            /** Enum values for worker nodes reset policy */
            export enum ResetWorkerNodesPolicyEnum {
                "delete" = "delete",
                "reinstall" = "reinstall"
            }
            /** A generic object for response message */
            export interface ResponseMessage {
                /** The response message. */
                message: string;
            }
            /** Kubernetes taint object */
            export interface Taint {
                /** The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute */
                effect: cloud.kube.TaintEffectEnum;
                /** The taint key to be applied to a node */
                key: string;
                /** The taint value corresponding to the taint key */
                value: string;
            }
            /** Enum values for taint effects */
            export enum TaintEffectEnum {
                "NoExecute" = "NoExecute",
                "NoSchedule" = "NoSchedule",
                "PreferNoSchedule" = "PreferNoSchedule"
            }
            /** Enum values for UpdatePolicy */
            export enum UpdatePolicy {
                "ALWAYS_UPDATE" = "ALWAYS_UPDATE",
                "MINIMAL_DOWNTIME" = "MINIMAL_DOWNTIME",
                "NEVER_UPDATE" = "NEVER_UPDATE"
            }
            /** Enum values for UpdatePolicy */
            export enum UpdatePolicyEnum {
                "ALWAYS_UPDATE" = "ALWAYS_UPDATE",
                "MINIMAL_DOWNTIME" = "MINIMAL_DOWNTIME",
                "NEVER_UPDATE" = "NEVER_UPDATE"
            }
            /** Enum values for UpdateStrategy */
            export enum UpdateStrategy {
                "LATEST_PATCH" = "LATEST_PATCH",
                "NEXT_MINOR" = "NEXT_MINOR"
            }
            /** Enum values for UpdateStrategy */
            export enum UpdateStrategyEnum {
                "LATEST_PATCH" = "LATEST_PATCH",
                "NEXT_MINOR" = "NEXT_MINOR"
            }
            /** List of available versions for upgrade */
            export enum UpgradeVersion {
                "1.12" = "1.12",
                "1.13" = "1.13",
                "1.14" = "1.14",
                "1.15" = "1.15",
                "1.16" = "1.16"
            }
            /** List of available versions for installation */
            export enum Version {
                "1.13" = "1.13",
                "1.14" = "1.14",
                "1.15" = "1.15"
            }
            /** List of available versions for installation */
            export enum VersionEnum {
                "1.24" = "1.24",
                "1.25" = "1.25",
                "1.26" = "1.26"
            }
        }
        export namespace loadbalancing {
            export namespace loadbalancer {
                /** Create a listener on loadbalancer creation */
                export interface ListenerCreate {
                    /** Name of the listener */
                    name: string;
                    /** Listener pools */
                    pools: cloud.loadbalancing.loadbalancer.PoolCreate[];
                    /** Listener port */
                    port: number;
                    /** Protocol for the listener */
                    protocol: cloud.loadbalancing.ListenerProtocolEnum;
                    /** Secret ID to get certificate for SSL listener creation */
                    secretId: string;
                }
                /** Create a member on loadbalancer creation */
                export interface MemberCreate {
                    /** IP address of the resource */
                    address: string;
                    /** Name of the member */
                    name: string;
                    /** Protocol port number for the resource */
                    protocolPort: number;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool. Between 1 and 256. */
                    weight ? : number;
                }
                /** Network information to create a loadbalancer */
                export interface NetworkInformationCreate {
                    /** Create a new gateway for the given network */
                    gateway: cloud.network.CreateGatewaySummary;
                    /** Private network ID to create the loadbalancer */
                    networkId: string;
                    /** Private subnet ID to create the loadbalancer */
                    subnetId: string;
                }
                /** Create a pool on loadbalancer creation */
                export interface PoolCreate {
                    /** Pool algorithm to split traffic between members */
                    algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                    /** Is pool default pool for the listener */
                    default: boolean;
                    /** Pool health monitor */
                    healthMonitor ? : cloud.loadbalancing.HealthMonitorCreate;
                    /** Pool members */
                    members: cloud.loadbalancing.loadbalancer.MemberCreate[];
                    /** Name of the pool */
                    name: string;
                    /** Protocol for the pool */
                    protocol: cloud.loadbalancing.PoolProtocolEnum;
                    /** Pool session persistence */
                    sessionPersistence: cloud.loadbalancing.PoolSessionPersistence;
                }
            }
            export namespace pool {
                /** Member */
                export interface Member {
                    /** IP address of the resource */
                    address: string;
                    /** ID of the resource */
                    id: string;
                    /** Name of the resource */
                    name: string;
                    /** Operating status of the resource */
                    operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                    /** Protocol port number for the resource */
                    protocolPort: number;
                    /** Provisioning status of the resource */
                    provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool */
                    weight ? : number;
                }
                /** Parameters to update a pool member */
                export interface MemberUpdate {
                    /** Name of the resource */
                    name ? : string;
                    /** Weight of a member determines the portion of requests or connections it services compared to the other members of the pool */
                    weight ? : number;
                }
            } /** Parameters to associate an existing floating IP to a loadbalancer */
            export interface AssociateFloatingIp {
                /** Floating IP ID */
                floatingIpId: string;
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private loadbalancer IP to associate the floating IP with */
                ip: string;
            }
            /** Parameters to create a floating IP for a loadbalancer */
            export interface CreateFloatingIp {
                /** Parameters to create a gateway if required */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Private loadbalancer IP to associate the floating IP with */
                ip: string;
            }
            /** Input to create a loadbalancer listener */
            export interface CreateListener {
                /** The ID of the secret containing the certificate */
                certificateId: string;
                /** The ID of the default pool */
                defaultPoolId: string;
                /** The ID of the loadbalancer */
                loadbalancerId: string;
                /** The name of the listener */
                name: string;
                /** Port to listen on */
                port: number;
                /** Protocol of the listener */
                protocol: cloud.loadbalancing.ListenerProtocolEnum;
            }
            /** Flavor */
            export interface Flavor {
                /** Flavor id */
                id: string;
                /** Flavor name */
                name: string;
            }
            /** HealthMonitor */
            export interface HealthMonitor {
                /** Monitor HTTP configuration */
                httpConfiguration ? : cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** The ID of the pool */
                id: string;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown ? : number;
                /** Type of the monitor */
                monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
                /** The name of the resource */
                name: string;
                /** The operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: string;
                /** The ID of the pool */
                poolId: string;
                /** The provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
            /** Create a health monitor on loadbalancer creation */
            export interface HealthMonitorCreate {
                /** Monitor HTTP configuration */
                httpConfiguration ? : cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown ? : number;
                /** Type of the monitor */
                monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
                /** The name of the resource */
                name: string;
                /** The operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: string;
                /** The provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
            /** HTTP configuration for loadbalancer health monitor */
            export interface HealthMonitorHTTPConfiguration {
                /** Domain name, which be injected into the HTTP Host Header to the backend server for HTTP health check */
                domainName: string;
                /** List of HTTP status codes expected in response from the member to declare it healthy */
                expectedCodes: number[];
                /** HTTP method that the health monitor uses for requests */
                httpMethod: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPMethodEnum;
                /** HTTP version that the health monitor uses for requests */
                httpVersion: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPVersionEnum;
                /** HTTP URL path of the request sent by the monitor to test the health of a backend member */
                urlPath: string;
            }
            /** L7 policy */
            export interface L7Policy {
                /** The L7 policy action */
                action: cloud.loadbalancing.L7PolicyActionEnum;
                /** A human-readable description for the resource */
                description: string;
                /** id */
                id: string;
                /** The ID of the listener. */
                listenerId: string;
                /** Human-readable name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** The position of this policy on the listener. Positions start at 1 */
                position: number;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" */
                redirectHttpCode ? : number;
                /** Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" */
                redirectPoolId ? : string;
                /** Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" */
                redirectPrefix ? : string;
                /** Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" */
                redirectUrl ? : string;
            }
            /** Loadbalancer L7 policy */
            export enum L7PolicyActionEnum {
                "redirectPrefix" = "redirectPrefix",
                "redirectToPool" = "redirectToPool",
                "redirectToURL" = "redirectToURL",
                "reject" = "reject"
            }
            /** L7 policy */
            export interface L7PolicyUpdate {
                /** The L7 policy action */
                action: cloud.loadbalancing.L7PolicyActionEnum;
                /** A human-readable description for the resource */
                description: string;
                /** The ID of the listener. */
                listenerId: string;
                /** Human-readable name of the resource */
                name: string;
                /** The position of this policy on the listener. Positions start at 1 */
                position: number;
                /** Requests matching this policy will be redirected to the specified URL or Prefix URL with the HTTP response code. Valid if action is "redirect_to" or "redirect_prefix" */
                redirectHttpCode ? : number;
                /** Requests matching this policy will be redirected to the pool with this ID. Only valid if action is "redirect_to_pool" */
                redirectPoolId ? : string;
                /** Requests matching this policy will be redirected to this Prefix URL. Only valid if action is "redirect_prefix" */
                redirectPrefix ? : string;
                /** Requests matching this policy will be redirected to this URL. Only valid if action is "redirect_to_url" */
                redirectUrl ? : string;
            }
            /** L7 rule */
            export interface L7Rule {
                /** The comparison type for the L7 rule */
                compareType: cloud.loadbalancing.L7RuleCompareTypeEnum;
                /** The ID of the L7 rule */
                id: string;
                /** When true the logic of the rule is inverted. For example, with invert set to true, equal to would become not equal to */
                invert: boolean;
                /** The key to use for the comparison. For example, the name of the cookie to evaluate */
                key: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** The L7 rule type */
                ruleType: cloud.loadbalancing.L7RuleTypeEnum;
                /** The value to use for the comparison. For example, the file type to compare */
                value: string;
            }
            /** Loadbalancer L7 rule compare type */
            export enum L7RuleCompareTypeEnum {
                "contains" = "contains",
                "endsWith" = "endsWith",
                "equalTo" = "equalTo",
                "regex" = "regex",
                "startsWith" = "startsWith"
            }
            /** Loadbalancer L7 rule type */
            export enum L7RuleTypeEnum {
                "cookie" = "cookie",
                "fileType" = "fileType",
                "header" = "header",
                "hostName" = "hostName",
                "path" = "path",
                "sslConnHasCert" = "sslConnHasCert",
                "sslDNField" = "sslDNField",
                "sslVerifyResult" = "sslVerifyResult"
            }
            /** Listener */
            export interface Listener {
                /** The ID of the secret containing the certificate */
                certificateId ? : string;
                /** The ID of the default pool */
                defaultPoolId ? : string;
                /** ID of the resource */
                id: string;
                /** A list of load balancer IDs */
                loadBalancerIds: string[];
                /** Name of the resource */
                name: string;
                /** Operating status of the listener */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Port to listen on */
                port: number;
                /** Protocol of the listener */
                protocol: cloud.loadbalancing.ListenerProtocolEnum;
                /** Provisioning status of the listener */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            }
            /** Loadbalancer listener protocol */
            export enum ListenerProtocolEnum {
                "http" = "http",
                "https" = "https",
                "prometheus" = "prometheus",
                "sctp" = "sctp",
                "tcp" = "tcp",
                "terminatedHTTPS" = "terminatedHTTPS",
                "udp" = "udp"
            }
            /** LoadBalancer */
            export interface LoadBalancer {
                /** The UTC date and timestamp when the resource was created */
                createdAt: string;
                /** ID of the flavor */
                flavorId: string;
                /** ID of the resource */
                id: string;
                /** Name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** UTC date and timestamp when the resource was created */
                updatedAt: string;
                /** IP address of the Virtual IP */
                vipAddress: string;
                /** Openstack ID of the network for the Virtual IP */
                vipNetworkId: string;
                /** ID of the subnet for the Virtual IP */
                vipSubnetId: string;
            }
            /** Load balancer Healthmonitor HTTP Method */
            export enum LoadBalancerHealthMonitorHTTPMethodEnum {
                "CONNECT" = "CONNECT",
                "DELETE" = "DELETE",
                "GET" = "GET",
                "HEAD" = "HEAD",
                "OPTIONS" = "OPTIONS",
                "PATCH" = "PATCH",
                "POST" = "POST",
                "PUT" = "PUT",
                "TRACE" = "TRACE"
            }
            /** Load balancer Healthmonitor HTTP Version */
            export enum LoadBalancerHealthMonitorHTTPVersionEnum {
                "1.0" = "1.0",
                "1.1" = "1.1"
            }
            /** Load balancer Healthmonitor type */
            export enum LoadBalancerHealthMonitorTypeEnum {
                "http" = "http",
                "https" = "https",
                "ping" = "ping",
                "sctp" = "sctp",
                "tcp" = "tcp",
                "tls-hello" = "tls-hello",
                "udp-connect" = "udp-connect"
            }
            /** Load balancer operating status */
            export enum LoadBalancerOperatingStatusEnum {
                "degraded" = "degraded",
                "draining" = "draining",
                "error" = "error",
                "noMonitor" = "noMonitor",
                "offline" = "offline",
                "online" = "online"
            }
            /** Load balancer provisioning status */
            export enum LoadBalancerProvisioningStatusEnum {
                "active" = "active",
                "creating" = "creating",
                "deleted" = "deleted",
                "deleting" = "deleting",
                "error" = "error",
                "updating" = "updating"
            }
            /** Create a loadbalancer */
            export interface LoadbalancerCreate {
                /** Loadbalancer flavor id */
                flavorId: string;
                /** Listeners to create with the loadbalancer */
                listeners: cloud.loadbalancing.loadbalancer.ListenerCreate[];
                /** Name of the member */
                name: string;
                /** Network information to create the loadbalancer */
                networkInformation: cloud.loadbalancing.loadbalancer.NetworkInformationCreate;
            }
            /** Pool */
            export interface Pool {
                /** Algorithm of the pool */
                algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                /** ID of the resource */
                id: string;
                /** ID of the listener */
                listenerId ? : string;
                /** ID of the loadbalancer */
                loadbalancerId: string;
                /** Name of the resource */
                name: string;
                /** Operating status of the resource */
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                /** Protocol of the pool */
                protocol: cloud.loadbalancing.PoolProtocolEnum;
                /** Provisioning status of the resource */
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                /** Information about session persistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Pool algorithm */
            export enum PoolAlgorithmEnum {
                "leastConnections" = "leastConnections",
                "roundRobin" = "roundRobin",
                "sourceIP" = "sourceIP",
                "sourceIPPort" = "sourceIPPort"
            }
            /** Pool */
            export interface PoolCreate {
                /** Algorithm of the pool */
                algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                /** ID of the listener */
                listenerId: string;
                /** ID of the loadbalancer */
                loadbalancerId: string;
                /** Name of the resource */
                name: string;
                /** Protocol of the pool */
                protocol: cloud.loadbalancing.PoolProtocolEnum;
                /** Information about session persistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Pool protocol */
            export enum PoolProtocolEnum {
                "http" = "http",
                "https" = "https",
                "proxy" = "proxy",
                "proxyV2" = "proxyV2",
                "sctp" = "sctp",
                "tcp" = "tcp",
                "udp" = "udp"
            }
            /** PoolSessionPersistence */
            export interface PoolSessionPersistence {
                /** Cookie name, only applicable to session persistence through cookie */
                cookieName: string;
                /** Type of session persistence */
                type: cloud.loadbalancing.PoolSessionPersistenceTypeEnum;
            }
            /** Pool session persistence type */
            export enum PoolSessionPersistenceTypeEnum {
                "appCookie" = "appCookie",
                "disabled" = "disabled",
                "httpCookie" = "httpCookie",
                "sourceIP" = "sourceIP"
            }
            /** Parameters to update a load balancer pool */
            export interface PoolUpdate {
                /** Algorithm of the pool */
                algorithm ? : cloud.loadbalancing.PoolAlgorithmEnum;
                /** Name of the resource */
                name ? : string;
                /** sessionPersistence */
                sessionPersistence ? : cloud.loadbalancing.PoolSessionPersistence;
            }
            /** Health monitor for LoadBalancer */
            export interface UpdateHealthMonitor {
                /** Monitor HTTP configuration */
                httpConfiguration: cloud.loadbalancing.HealthMonitorHTTPConfiguration;
                /** Number of successful checks before changing the operating status of the member to ONLINE */
                maxRetries: number;
                /** Number of allowed check failures before changing the operating status of the member to ERROR */
                maxRetriesDown: number;
                /** The name of the resource */
                name: string;
                /** Duration between sending probes to members, in format RFC3339 */
                periodicity: string;
                /** Maximum time, in seconds, that a monitor waits to connect before it times out. This value must be less than the periodicity value */
                timeout: number;
            }
        }
        export namespace migration {
            /** Migration */
            export interface Migration {
                /** The planned date of the migration */
                date: string;
                /** Migration Id */
                migrationId: string;
                /** The id of the resource to migrate */
                resourceId: string;
                /** The type of the resource to migrate */
                resourceType: cloud.migration.ResourceTypeEnum;
            }
            /** ResourceTypeEnum */
            export enum ResourceTypeEnum {
                "instance" = "instance"
            }
        }
        export namespace network {
            export namespace gateway {
                /** Input to create a new interface for a gateway */
                export interface CreateInterface {
                    /** Subnet id to add */
                    subnetId: string;
                }
                /** External information of the gateway */
                export interface ExternalInformation {
                    /** External ips of the gateway */
                    ips: cloud.network.gateway.IpSubnet[];
                    /** External network ID of the gateway */
                    networkId: string;
                }
                /** Interface of the gateway */
                export interface Interface {
                    /** ID of the interface */
                    id: string;
                    /** IP of the interface */
                    ip: string;
                    /** Network ID of the interface */
                    networkId: string;
                    /** Subnet ID of the interface */
                    subnetId: string;
                }
                /** IP and subnet information */
                export interface IpSubnet {
                    /** External IP of the gateway */
                    ip: string;
                    /** Subnet ID of the ip */
                    subnetId: string;
                }
            } /** Input to create a gateway */
            export interface CreateGateway {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
                /** Information to create the network for the gateway */
                network: cloud.network.CreateNetworkForGatewaySummary;
            }
            /** Parameters to create a gateway from another resource creation */
            export interface CreateGatewaySummary {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Gateway name */
                name: string;
            }
            /** Parameters to create a network with a gateway */
            export interface CreateNetwork {
                /** gateway */
                gateway ? : cloud.network.CreateGatewaySummary;
                /** Network name */
                name: string;
                /** subnet */
                subnet: cloud.network.CreateSubnetSummary;
                /** VLAN id, between 1 and 4000 */
                vlanId: number;
            }
            /** Parameters to create a network from another resource creation */
            export interface CreateNetworkForGatewaySummary {
                /** Name of the network */
                name: string;
                /** Subnet of the network */
                subnet: cloud.network.CreateSubnetForGatewaySummary;
                /** VLAN id, between 1 and 4000 */
                vlanId: number;
            }
            /** Parameters to create a subnet from another resource creation */
            export interface CreateSubnetForGatewaySummary {
                /** Subnet range in CIDR notation */
                cidr: string;
                /** Enable DHCP for the subnet */
                enableDhcp: boolean;
                /** IP version */
                ipVersion: number;
            }
            /** Parameters to create a subnet from another resource creation */
            export interface CreateSubnetSummary {
                /** Subnet range in CIDR notation */
                cidr: string;
                /** Enable DHCP for the subnet */
                enableDhcp: boolean;
                /** Set a gateway ip for the subnet */
                enableGatewayIp: boolean;
                /** IP version */
                ipVersion: number;
            }
            /** Gateway */
            export interface Gateway {
                /** External information */
                externalInformation ? : cloud.network.gateway.ExternalInformation;
                /** ID of the gateway */
                id: string;
                /** Interfaces list of the gateway */
                interfaces: cloud.network.gateway.Interface[];
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
                /** Gateway region */
                region: string;
                /** Status of the gateway */
                status: cloud.network.GatewayStatusEnum;
            }
            /** GatewayModelEnum */
            export enum GatewayModelEnum {
                "l" = "l",
                "m" = "m",
                "s" = "s"
            }
            /** GatewayStatusEnum */
            export enum GatewayStatusEnum {
                "active" = "active",
                "building" = "building",
                "down" = "down",
                "error" = "error"
            }
            /** IPPool */
            export interface IPPool {
                /** Enable DHCP */
                dhcp: boolean;
                /** Last IP for this region (eg: 192.168.1.24) */
                end: string;
                /** Global network with cidr (eg: 192.168.1.0/24) */
                network: string;
                /** Region where this subnet will be created */
                region: string;
                /** First IP for this region (eg: 192.168.1.12) */
                start: string;
            }
            /** Network */
            export interface Network {
                /** Network id */
                id: string;
                /** Network name */
                name: string;
                /** Details about private network in region */
                regions: cloud.network.NetworkRegion[];
                /** Network status */
                status: cloud.network.NetworkStatusEnum;
                /** Network type */
                type ? : cloud.network.NetworkTypeEnum;
                /** Network VLAN id */
                vlanId: number;
            }
            /** NetworkRegion */
            export interface NetworkRegion {
                /** Network id on openstack region */
                openstackId ? : string;
                /** Network region */
                region: string;
                /** Network region status */
                status: cloud.network.NetworkRegionStatusEnum;
            }
            /** NetworkRegionStatusEnum */
            export enum NetworkRegionStatusEnum {
                "ACTIVE" = "ACTIVE",
                "BUILDING" = "BUILDING"
            }
            /** NetworkStatusEnum */
            export enum NetworkStatusEnum {
                "ACTIVE" = "ACTIVE",
                "BUILDING" = "BUILDING",
                "DELETING" = "DELETING"
            }
            /** NetworkTypeEnum */
            export enum NetworkTypeEnum {
                "private" = "private",
                "public" = "public"
            }
            /** NetworkVisibilityEnum */
            export enum NetworkVisibilityEnum {
                "private" = "private",
                "public" = "public"
            }
            /** Subnet */
            export interface Subnet {
                /** Subnet CIDR */
                cidr: string;
                /** Is DHCP enabled for the subnet */
                dhcpEnabled: boolean;
                /** Gateway IP in the subnet */
                gatewayIp ? : string;
                /** Subnet id */
                id: string;
                /** List of ip pools allocated in subnet */
                ipPools: cloud.network.IPPool[];
            }
            /** Input to update a gateway */
            export interface UpdateGateway {
                /** Model of the gateway */
                model: cloud.network.GatewayModelEnum;
                /** Name of the gateway */
                name: string;
            }
        }
        export namespace order {
            export namespace rule {
                /** Public Cloud products availability */
                export interface Availability {
                    /** Plan availability */
                    plans: cloud.order.rule.AvailabilityPlan[];
                    /** Product availability */
                    products: cloud.order.rule.AvailabilityProduct[];
                }
                /** Public Cloud plan availability */
                export interface AvailabilityPlan {
                    /** Plan code */
                    code: string;
                    /** Plan is available on those regions */
                    regions: string[];
                }
                /** Public Cloud product availability */
                export interface AvailabilityProduct {
                    /** Product name */
                    name: string;
                    /** Product is available on those regions */
                    regions: string[];
                }
                /** Public Cloud instance categories */
                export interface InstanceCategories {
                    /** Instance categories */
                    categories: cloud.order.rule.InstanceCategory[];
                    /** Default instance category name */
                    defaultCategory: string;
                }
                /** Public Cloud instance category */
                export interface InstanceCategory {
                    /** Instance category name */
                    category: cloud.order.rule.InstanceCategoryTypeEnum;
                    /** Instance category is new */
                    isNew ? : boolean;
                    /** Instance flavor matching patterns */
                    kinds: string[];
                    /** Instance category title */
                    title: string;
                }
                /** InstanceCategoryTypeEnum */
                export enum InstanceCategoryTypeEnum {
                    "accelerated" = "accelerated",
                    "balanced" = "balanced",
                    "baremetal" = "baremetal",
                    "discovery" = "discovery",
                    "iops" = "iops",
                    "ram" = "ram",
                    "vps" = "vps"
                }
            } /** Cloud Order */
            export interface Order {
                /** Order creation date */
                date: string;
                /** Order id */
                orderId: number;
                /** Order plan code */
                planCode: string;
                /** Service created */
                serviceName ? : string;
                /** status */
                status: cloud.order.StatusEnum;
            }
            /** Order status */
            export enum StatusEnum {
                "delivered" = "delivered",
                "delivering" = "delivering",
                "unknown" = "unknown",
                "unpaid" = "unpaid"
            }
        }
        export namespace project {
            export namespace ai {
                export namespace app {
                    /** AI Solutions Platform App Object */
                    export interface App {
                        /** App creation date */
                        createdAt: string;
                        /** App Id */
                        id: string;
                        /** App spec */
                        spec: cloud.project.ai.app.AppSpec;
                        /** App Container Status */
                        status: cloud.project.ai.app.AppStatus;
                        /** App last update date */
                        updatedAt: string;
                        /** App user owner */
                        user: string;
                    }
                    /** AI App Image object */
                    export interface AppImageInput {
                        /** URL of the Docker image */
                        url: string;
                    }
                    /** AI Solutions App Spec Object to create an app */
                    export interface AppSpec {
                        /** App command */
                        command ? : string[];
                        /** Default port to access the http service inside the app */
                        defaultHttpPort ? : number;
                        /** AI App deployment strategy */
                        deploymentStrategy ? : cloud.project.ai.app.DeploymentStrategy;
                        /** List of environment variable to be set inside the app */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** App image */
                        image: string;
                        /** Labels for the app */
                        labels ? : Record < string, string > ;
                        /** App name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** App readiness probe */
                        probe ? : cloud.project.ai.app.Probe;
                        /** Host region of the app */
                        region: string;
                        /** App resources */
                        resources: cloud.project.ai.Resources;
                        /** App scaling strategy */
                        scalingStrategy ? : cloud.project.ai.app.ScalingStrategy;
                        /** True if app api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions App Spec Object to create a app */
                    export interface AppSpecInput {
                        /** App command */
                        command ? : string[];
                        /** Default port to access http service inside the app */
                        defaultHttpPort ? : number;
                        /** AI App deployment strategy */
                        deploymentStrategy ? : cloud.project.ai.app.DeploymentStrategy;
                        /** List of environment variable to be set inside the app */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Docker or capability image to use in the app. App capability images must comply with the pattern 'image-id:version' */
                        image: string;
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string, string > ;
                        /** App name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** App readiness probe */
                        probe ? : cloud.project.ai.app.ProbeInput;
                        /** Host region of the app */
                        region: string;
                        /** App resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** App scaling strategy */
                        scalingStrategy ? : cloud.project.ai.app.ScalingStrategyInput;
                        /** Whether if app api port can be accessed without any authentication token */
                        unsecureHttp ? : boolean;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the application */
                    export enum AppStateEnum {
                        "DELETED" = "DELETED",
                        "DELETING" = "DELETING",
                        "ERROR" = "ERROR",
                        "FAILED" = "FAILED",
                        "INITIALIZING" = "INITIALIZING",
                        "QUEUED" = "QUEUED",
                        "RUNNING" = "RUNNING",
                        "SCALING" = "SCALING",
                        "STOPPED" = "STOPPED",
                        "STOPPING" = "STOPPING"
                    }
                    /** AI Solutions App State History Object */
                    export interface AppStateHistory {
                        /** Date when the status occurred */
                        date: string;
                        /** State of the app */
                        state: cloud.project.ai.app.AppStateEnum;
                    }
                    /** AI Solutions App Status Object */
                    export interface AppStatus {
                        /** Number of available replicas */
                        availableReplicas: number;
                        /** Status about the datasync linked to the app */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Job state history */
                        history: cloud.project.ai.app.AppStateHistory[];
                        /** Information about the app */
                        info: cloud.project.ai.Info;
                        /** App info url */
                        infoUrl ? : string;
                        /** Date of the last app state change */
                        lastTransitionDate ? : string;
                        /** App resource usage url */
                        monitoringUrl ? : string;
                        /** State of the app */
                        state ? : cloud.project.ai.app.AppStateEnum;
                        /** App access url */
                        url ? : string;
                        /** App Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                    }
                    /** AI Solutions AI App deployment strategy object */
                    export interface DeploymentStrategy {
                        /** Maximum number of replicas that can be created over the desired number of Pods (can be expressed as a percentage of the desired pods, suffixed with '%') */
                        maxSurge ? : string;
                        /** Maximum number of replicas that can be unavailable during the update process (can be expressed as a percentage of the desired pods, suffixed with '%') */
                        maxUnavailable ? : string;
                        /** Number of seconds you want to wait for your Deployment to progress before the system reports back that the Deployment has failed progressing */
                        progressDeadlineSeconds ? : number;
                    }
                    /** AI Solutions App Probe Object */
                    export interface Probe {
                        /** Path to access to check for readiness */
                        path ? : string;
                        /** Port to access to check for readiness */
                        port ? : number;
                    }
                    /** AI Solutions App Probe Object */
                    export interface ProbeInput {
                        /** Path to access to check for readiness */
                        path ? : string;
                        /** Port to access to check for readiness */
                        port ? : number;
                    }
                    /** AI Solutions App automatic scaling strategy object */
                    export interface ScalingAutomaticStrategy {
                        /** The average resource usage threshold that the app upscale or downscale will be triggered from, in percent */
                        averageUsageTarget: number;
                        /** Maximum number of replicas */
                        replicasMax: number;
                        /** Minimum number of replicas */
                        replicasMin: number;
                        /** Type of the resource to base the automatic scaling on */
                        resourceType: cloud.project.ai.app.ScalingAutomaticStrategyResourceTypeEnum;
                    }
                    /** AI Solutions App automatic scaling strategy object */
                    export interface ScalingAutomaticStrategyInput {
                        /** The average resource usage threshold that the app upscale or downscale will be triggered from, in percent */
                        averageUsageTarget: number;
                        /** Maximum number of replicas */
                        replicasMax: number;
                        /** Minimum number of replicas */
                        replicasMin: number;
                        /** Type of the resource to base the automatic scaling on */
                        resourceType: cloud.project.ai.app.ScalingAutomaticStrategyResourceTypeEnum;
                    }
                    /** Resource type for App automatic scaling strategy */
                    export enum ScalingAutomaticStrategyResourceTypeEnum {
                        "CPU" = "CPU",
                        "RAM" = "RAM"
                    }
                    /** AI Solutions App Status Object */
                    export interface ScalingFixedStrategy {
                        /** Number of wanted replicas */
                        replicas: number;
                    }
                    /** AI Solutions App Status Object */
                    export interface ScalingFixedStrategyInput {
                        /** Number of wanted replicas */
                        replicas: number;
                    }
                    /** AI Solutions App Status Object */
                    export interface ScalingStrategy {
                        /** Strategy setting a variable number of replicas, based on an average resource usage threshold */
                        automatic ? : cloud.project.ai.app.ScalingAutomaticStrategy;
                        /** Strategy setting a fix number of replicas */
                        fixed ? : cloud.project.ai.app.ScalingFixedStrategy;
                    }
                    /** AI Solutions App Status Object */
                    export interface ScalingStrategyInput {
                        /** Strategy setting a variable number of replicas, based on an average resource usage threshold (conflicts with 'fixed' property when both are not null) */
                        automatic ? : cloud.project.ai.app.ScalingAutomaticStrategyInput;
                        /** Strategy setting a fix number of replicas (conflicts with 'automatic' property when both are not null) */
                        fixed ? : cloud.project.ai.app.ScalingFixedStrategyInput;
                    }
                    /** AI Solutions AI App update object */
                    export interface UpdateInput {
                        /** Deployment strategy to use when updating this AI App */
                        deploymentStrategy ? : cloud.project.ai.app.DeploymentStrategy;
                        /** URL of the Docker image for this AI deployment */
                        url ? : string;
                    }
                }
                export namespace capabilities {
                    export namespace app {
                        /** AI Solutions App image object */
                        export interface Image {
                            /** Short description of the image */
                            description: string;
                            /** URL of the image documentation */
                            docUrl: string;
                            /** Unique identifier of the image */
                            id: string;
                            /** Type of licensing */
                            licensing: cloud.project.ai.capabilities.LicensingTypeEnum;
                            /** URL of the logo of the image */
                            logoUrl: string;
                            /** Name of the image */
                            name: string;
                            /** ID of the partner providing the image */
                            partnerId: string;
                            /** Name of the partner providing the image */
                            partnerName: string;
                            /** List of available versions of this image */
                            versions: string[];
                        }
                    }
                    export namespace flavor {
                        /** AI Solutions Global GPU information */
                        export interface GpuInformation {
                            /** The GPU Brand */
                            gpuBrand: string;
                            /** The GPU Memory in bits */
                            gpuMemory: number;
                            /** The GPU Model */
                            gpuModel: string;
                        }
                        /** AI Solutions Global Resource per flavor unit */
                        export interface ResourcesPerUnit {
                            /** The amount of cpu for one unit of the flavor */
                            cpu: number;
                            /** The amount of ephemeral storage in bytes */
                            ephemeralStorage: number;
                            /** The amount of memory in bytes */
                            memory: number;
                            /** The guarantee private bandwidth in bytes per seconds */
                            privateNetwork: number;
                            /** The guarantee public bandwidth in bytes per seconds */
                            publicNetwork: number;
                        }
                    }
                    export namespace job {
                        /** AI Solutions Job image object */
                        export interface Image {
                            /** Short description of the image */
                            description: string;
                            /** URL of the image documentation */
                            docUrl: string;
                            /** Unique identifier of the image */
                            id: string;
                            /** URL of the logo of the image */
                            logoUrl: string;
                            /** Name of the image */
                            name: string;
                            /** List of available versions of this image */
                            versions: string[];
                        }
                    }
                    export namespace notebook {
                        /** AI Solutions Notebook editor object */
                        export interface Editor {
                            /** Short description of the editor */
                            description: string;
                            /** URL of the editor documentation */
                            docUrl: string;
                            /** Unique identifier of the editor */
                            id: string;
                            /** URL of the logo of the editor */
                            logoUrl: string;
                            /** Name of the editor */
                            name: string;
                            /** List of available versions of this editor */
                            versions: string[];
                        }
                        /** AI Solutions Notebook framework object */
                        export interface Framework {
                            /** Short description of the framework */
                            description: string;
                            /** URL of the framework documentation */
                            docUrl: string;
                            /** Unique identifier of the framework */
                            id: string;
                            /** URL of the logo of the framework */
                            logoUrl: string;
                            /** Name of the framework */
                            name: string;
                            /** List of paths that are automatically saved */
                            savedPaths ? : string[];
                            /** List of available versions of this framework */
                            versions: string[];
                        }
                    } /** AI Solutions Features */
                    export interface Features {
                        /** Inform if the AI Solutions is in Lab mode or not */
                        lab: boolean;
                        /** Capability to add registry */
                        registry: boolean;
                    }
                    /** AI Solutions Flavor */
                    export interface Flavor {
                        /** Is the flavor the default one for a flavor type */
                        default: boolean;
                        /** Flavor description */
                        description: string;
                        /** Describe gpu informations */
                        gpuInformation ? : cloud.project.ai.capabilities.flavor.GpuInformation;
                        /** Flavor id */
                        id: string;
                        /** Maximum amount available for a job / notebook */
                        max: number;
                        /** Describe the amount of resources given per unit of the flavor */
                        resourcesPerUnit: cloud.project.ai.capabilities.flavor.ResourcesPerUnit;
                        /** Flavor type */
                        type: cloud.project.ai.capabilities.FlavorTypeEnum;
                    }
                    /** Flavor Type */
                    export enum FlavorTypeEnum {
                        "cpu" = "cpu",
                        "gpu" = "gpu"
                    }
                    /** Licensing Type */
                    export enum LicensingTypeEnum {
                        "per-app" = "per-app",
                        "per-replica" = "per-replica",
                        "per-resource" = "per-resource"
                    }
                    /** AI Solutions Preset image */
                    export interface Preset {
                        /** Preset capabilities */
                        capabilities: cloud.project.ai.capabilities.PresetCapabilities;
                        /** Preset description */
                        descriptions: string[];
                        /** URL toward the preset image documentation */
                        docUrl: cloud.project.ai.capabilities.PresetDocumentationUrl[];
                        /** Preset id */
                        id: string;
                        /** URL toward the logo to illustrate the preset */
                        logoUrl: string;
                        /** Preset name */
                        name: string;
                        /** Partner name */
                        partner: cloud.project.ai.job.Partner;
                        /** Snippet example of the doc */
                        snippet: string;
                        /** Preset type */
                        type: cloud.project.ai.capabilities.PresetTypeEnum;
                    }
                    /** AI Solutions Preset image enabled features */
                    export interface PresetCapabilities {
                        /** Exec enabled */
                        exec: boolean;
                        /** Flavor types */
                        flavorTypes: cloud.project.ai.capabilities.FlavorTypeEnum[];
                        /** Log enabled */
                        log: boolean;
                        /** Resources requirements */
                        resources: cloud.project.ai.capabilities.PresetResources;
                        /** SSH enabled */
                        ssh: boolean;
                        /** Volume enabled */
                        volume: boolean;
                    }
                    /** AI Solutions Preset image */
                    export interface PresetDocumentationUrl {
                        /** Documentation Name */
                        name: string;
                        /** Documentation URL */
                        url: string;
                    }
                    /** AI Solutions Preset resources requirements */
                    export interface PresetResources {
                        /** Maximum number of GPUs supported */
                        maxGpu: number;
                    }
                    /** Preset Type */
                    export enum PresetTypeEnum {
                        "app" = "app",
                        "job" = "job",
                        "notebook" = "notebook"
                    }
                    /** AI Solutions Project Quotas */
                    export interface ProjectQuotas {
                        /** Project's quotas per compute-type resource (e.g CPU/GPU) */
                        resources: Record < string,
                        number > ;
                        /** Storage quota (in bits) that is allocated to the project */
                        storage: number;
                    }
                    /** AI Solutions Region */
                    export interface Region {
                        /** Client Install Url */
                        cliInstallUrl: string;
                        /** Documentation Url */
                        documentationUrl: string;
                        /** Region id */
                        id: string;
                        /** Region Registry Url */
                        registryUrl: string;
                        /** Region version */
                        version: string;
                    }
                }
                export namespace job {
                    /** AI Solutions Job Object */
                    export interface Job {
                        /** Job creation date */
                        createdAt: string;
                        /** Job Id */
                        id: string;
                        /** Job specifications */
                        spec: cloud.project.ai.job.JobSpec;
                        /** Job status */
                        status: cloud.project.ai.job.JobStatus;
                        /** Job update date */
                        updatedAt: string;
                        /** Job user owner */
                        user: string;
                    }
                    /** AI Solutions Job Env Object */
                    export interface JobEnv {
                        /** Name of the environment variable to set inside the job */
                        name: string;
                        /** Value of the environment variable to set inside the job */
                        value: string;
                    }
                    /** AI Solutions Job Spec Object to create a job */
                    export interface JobSpec {
                        /** Job command */
                        command ? : string[];
                        /** Port use as the default one to access http service inside job */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside job */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Job image */
                        image: string;
                        /** Labels for the job */
                        labels ? : Record < string, string > ;
                        /** Job name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** User ID to use to access the job */
                        readUser ? : string;
                        /** Host region of the job */
                        region: string;
                        /** Job resources */
                        resources: cloud.project.ai.Resources;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access to the job container */
                        sshPublicKeys ? : string[];
                        /** Maximum time to spend before killing the job */
                        timeout ? : number;
                        /** true if job api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Job Spec Object to create a job */
                    export interface JobSpecInput {
                        /** Job command */
                        command ? : string[];
                        /** Port use as the default one to access http service inside job */
                        defaultHttpPort ? : number;
                        /** List of environment variable to be set inside job */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Job image */
                        image: string;
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string, string > ;
                        /** Job name */
                        name: string;
                        /** Partner ID */
                        partnerId ? : string;
                        /** User ID to use to access the job */
                        readUser ? : string;
                        /** Host region of the job */
                        region: string;
                        /** Job resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access to the job container */
                        sshPublicKeys ? : string[];
                        /** Maximum time to spend before killing the job */
                        timeout ? : number;
                        /** true if job api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the job */
                    export enum JobStateEnum {
                        "DONE" = "DONE",
                        "ERROR" = "ERROR",
                        "FAILED" = "FAILED",
                        "FINALIZING" = "FINALIZING",
                        "INITIALIZING" = "INITIALIZING",
                        "INTERRUPTED" = "INTERRUPTED",
                        "INTERRUPTING" = "INTERRUPTING",
                        "PENDING" = "PENDING",
                        "QUEUED" = "QUEUED",
                        "RUNNING" = "RUNNING",
                        "SYNC_FAILED" = "SYNC_FAILED",
                        "TIMEOUT" = "TIMEOUT"
                    }
                    /** AI Solutions Job Status Object */
                    export interface JobStatus {
                        /** Status about the datasync linked to the job */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Duration of the job */
                        duration ? : number;
                        /** Exit code of the job */
                        exitCode ? : number;
                        /** External IP of the job */
                        externalIp ? : string;
                        /** Date when the job was finalized */
                        finalizedAt ? : string;
                        /** Job state history */
                        history: cloud.project.ai.job.JobStatusHistory[];
                        /** Information about the job */
                        info: cloud.project.ai.Info;
                        /** Job info url */
                        infoUrl ? : string;
                        /** Date when the job was initialized */
                        initializingAt ? : string;
                        /** IP of the job */
                        ip ? : string;
                        /** Date of the last transition */
                        lastTransitionDate ? : string;
                        /** Job resource usage url */
                        monitoringUrl ? : string;
                        /** Date when the job was queued */
                        queuedAt ? : string;
                        /** SSH Url fot the job */
                        sshUrl ? : string;
                        /** Date when the job was started */
                        startedAt ? : string;
                        /** State of the job */
                        state ? : cloud.project.ai.job.JobStateEnum;
                        /** Date when the job was stop */
                        stoppedAt ? : string;
                        /** Job access url */
                        url ? : string;
                        /** Job Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                    }
                    /** AI Solutions Job Status History Object */
                    export interface JobStatusHistory {
                        /** Date when the status occurred */
                        date: string;
                        /** State of the job */
                        state: cloud.project.ai.job.JobStateEnum;
                    }
                    /** AI Solutions Partner Object */
                    export interface Partner {
                        /** Partner flavor */
                        flavor: string;
                        /** Partner ID */
                        id: string;
                        /** Partner name */
                        name: string;
                    }
                    /** A Image of a preset data science image */
                    export interface PresetImage {
                        /** Model Image Description */
                        description: string;
                        /** Image id */
                        id: string;
                        /** Link to the Opensource Model */
                        link ? : string;
                        /** Framework logo */
                        logo ? : string;
                        /** Model Image Name */
                        name: string;
                    }
                }
                export namespace notebook {
                    /** AI Solutions Platform Notebook Backup Object */
                    export interface Backup {
                        /** Backup creation date */
                        createdAt: string;
                        /** Backup Id */
                        id: string;
                        /** Backup last update date */
                        updatedAt: string;
                    }
                    /** AI Solutions Data Object */
                    export interface Editor {
                        /** Short description of the code editor */
                        description: string;
                        /** URL toward the code editor documentation */
                        docUrl: string;
                        /** Unique identifier of the code editor */
                        id: string;
                        /** URL toward the logo to illustrate the editor */
                        logoUrl: string;
                        /** Name of the code editor */
                        name: string;
                        /** Version of the code editor */
                        version: string;
                    }
                    /** AI Solutions Data Object */
                    export interface Framework {
                        /** Short description of the framework */
                        description: string;
                        /** URL toward the framework documentation */
                        docUrl: string;
                        /** Unique identifier of the framework */
                        id: string;
                        /** URL toward the logo to illustrate the framework */
                        logoUrl: string;
                        /** Name of the framework */
                        name: string;
                        /** Available versions for the framework (default is the first one) */
                        versions: string[];
                    }
                    /** AI Solutions Platform Notebook Object */
                    export interface Notebook {
                        /** Notebook creation date */
                        createdAt: string;
                        /** Notebook Id */
                        id: string;
                        /** Notebook spec */
                        spec: cloud.project.ai.notebook.NotebookSpec;
                        /** Notebook Container Status */
                        status: cloud.project.ai.notebook.NotebookStatus;
                        /** Notebook last update date */
                        updatedAt: string;
                        /** Notebook user owner */
                        user: string;
                    }
                    /** AI Solutions Framework Object to create a notebook */
                    export interface NotebookEnv {
                        /** Code editor to use */
                        editorId: string;
                        /** Framework name */
                        frameworkId: string;
                        /** Framework version to use */
                        frameworkVersion ? : string;
                    }
                    /** AI Solutions Notebook Spec Object to create a notebook */
                    export interface NotebookSpec {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.ai.notebook.NotebookEnv;
                        /** List of environment variables to be set inside the notebook */
                        envVars: cloud.project.ai.job.JobEnv[];
                        /** Current notebook flavor */
                        flavor ? : string;
                        /** Labels for the notebook */
                        labels ? : Record < string,
                        string > ;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                        /** Notebook resources */
                        resources: cloud.project.ai.Resources;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Notebook Spec Object to create a notebook */
                    export interface NotebookSpecInput {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.ai.notebook.NotebookEnv;
                        /** List of environment variables to be set inside the notebook */
                        envVars ? : cloud.project.ai.job.JobEnv[];
                        /** Labels are used to scope tokens, labels prefixed by 'ovh/' are owned by the platform and overridden */
                        labels ? : Record < string,
                        string > ;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                        /** Notebook resources */
                        resources: cloud.project.ai.ResourcesInput;
                        /** Shutdown strategy (if any) */
                        shutdown ? : cloud.project.ai.ShutdownStrategyEnum;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** State of the notebook */
                    export enum NotebookStateEnum {
                        "DELETING" = "DELETING",
                        "FAILED" = "FAILED",
                        "RUNNING" = "RUNNING",
                        "STARTING" = "STARTING",
                        "STOPPED" = "STOPPED",
                        "STOPPING" = "STOPPING",
                        "SYNC_FAILED" = "SYNC_FAILED"
                    }
                    /** AI Solutions Notebook Status Object */
                    export interface NotebookStatus {
                        /** Status about the datasync linked to the job */
                        dataSync: cloud.project.ai.volume.DataSync[];
                        /** Duration of the notebook in seconds */
                        duration ? : number;
                        /** Information about the notebook */
                        info: cloud.project.ai.Info;
                        /** Notebook info url */
                        infoUrl ? : string;
                        /** Status for the last job run */
                        lastJobStatus: cloud.project.ai.job.JobStatus;
                        /** Date when the notebook was last started */
                        lastStartedAt ? : string;
                        /** Date when the notebook was last stopped */
                        lastStoppedAt ? : string;
                        /** Notebook resource usage url */
                        monitoringUrl ? : string;
                        /** SSH Url for the notebook */
                        sshUrl ? : string;
                        /** State of the notebook */
                        state ? : cloud.project.ai.notebook.NotebookStateEnum;
                        /** Notebook access url */
                        url ? : string;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.VolumeStatus[];
                        /** State of the notebook workspace */
                        workspace ? : cloud.project.ai.notebook.NotebookWorkspace;
                    }
                    /** AI Solutions Notebook Spec Object to update a notebook */
                    export interface NotebookUpdate {
                        /** Labels for the notebook */
                        labels ? : Record < string, string > ;
                        /** Notebook resources */
                        resources ? : cloud.project.ai.ResourcesInput;
                        /** SSH keys authorized to access the notebook */
                        sshPublicKeys ? : string[];
                        /** true if notebook api port can be accessed without any authentication token, false otherwise */
                        unsecureHttp ? : boolean;
                        /** Notebook Data linked */
                        volumes ? : cloud.project.ai.volume.Volume[];
                    }
                    /** AI Solutions Notebook Workspace Object */
                    export interface NotebookWorkspace {
                        /** The number of storage bytes free of charges for notebook workspace */
                        storageFree: number;
                        /** The number of storage bytes currently used to persist notebook workspace */
                        storageUsed: number;
                    }
                }
                export namespace partner {
                    /** Representation of a partner's contract with logged in user's tenant */
                    export interface Contract {
                        /** Contract signature date for the logged in user's tenant */
                        signedAt ? : string;
                        /** Map of terms of service details per locale */
                        termsOfService: Record < string, cloud.project.ai.partner.ContractTermsLocale > ;
                    }
                    /** Representation of a partner's contract on a given language */
                    export interface ContractTermsLocale {
                        /** Contract file URL for a given language */
                        url: string;
                    }
                    /** Representation of a partner */
                    export interface Partner {
                        /** Partner contract with logged in user's tenant */
                        contract ? : cloud.project.ai.partner.Contract;
                        /** Partner creation date */
                        createdAt: string;
                        /** Partner Description */
                        description: string;
                        /** Partner Id */
                        id: string;
                        /** Partner Name */
                        name: string;
                    }
                }
                export namespace registry {
                    /** Representation of a registry */
                    export interface Registry {
                        /** Registry creation date */
                        createdAt: string;
                        /** Registry Id */
                        id: string;
                        /** Docker registry password */
                        password ? : string;
                        /** Region where the registry is available */
                        region: string;
                        /** Registry update date */
                        updatedAt: string;
                        /** Docker registry URL */
                        url ? : string;
                        /** Registry user creator */
                        user: string;
                        /** Docker registry username */
                        username ? : string;
                    }
                    /** Docker registry update object */
                    export interface RegistryUpdateInput {
                        /** Docker registry password */
                        password ? : string;
                        /** Docker registry URL */
                        url ? : string;
                        /** Docker registry username */
                        username ? : string;
                    }
                }
                export namespace token {
                    /** AI Solutions Application Token */
                    export interface Token {
                        /** Application token creation date */
                        createdAt: string;
                        /** Application token Id */
                        id: string;
                        /** Application token spec */
                        spec: cloud.project.ai.token.TokenSpec;
                        /** Application token status */
                        status: cloud.project.ai.token.TokenStatus;
                        /** Application token update date */
                        updatedAt: string;
                    }
                    /** AI Solutions Application Token Spec Object to create a notebook */
                    export interface TokenSpec {
                        /** Application token label selector */
                        labelSelector ? : string;
                        /** Application token name */
                        name: string;
                        /** Public Cloud Storage Region */
                        region: string;
                        /** Role granted by this application token */
                        role: cloud.project.ai.TokenRoleEnum;
                    }
                    /** AI Solutions Application Token Status Object */
                    export interface TokenStatus {
                        /** Application token value to use as a Bearer */
                        value ? : string;
                        /** Application token version */
                        version: number;
                    }
                }
                export namespace volume {
                    /** AI Solutions data store container Volume Object */
                    export interface DataStore {
                        /** Data store alias */
                        alias: string;
                        /** Name of the tar archive that needs to be saved */
                        archive ? : string;
                        /** Data store container to attach */
                        container: string;
                        /** True if data is stored on OVHcloud AI's internal storage */
                        internal ? : boolean;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                    }
                    /** AI Solutions Data Sync */
                    export interface DataSync {
                        /** Data Sync creation date */
                        createdAt: string;
                        /** Data Sync Id */
                        id: string;
                        /** Data Sync specifications */
                        spec: cloud.project.ai.volume.DataSyncSpec;
                        /** Data Sync status */
                        status: cloud.project.ai.volume.DataSyncStatus;
                        /** Data Sync update date */
                        updatedAt: string;
                    }
                    /** Data Sync Direction */
                    export enum DataSyncEnum {
                        "pull" = "pull",
                        "push" = "push"
                    }
                    /** State of the progress sync */
                    export enum DataSyncProgressStateEnum {
                        "DONE" = "DONE",
                        "ERROR" = "ERROR",
                        "FAILED" = "FAILED",
                        "INTERRUPTED" = "INTERRUPTED",
                        "QUEUED" = "QUEUED",
                        "RUNNING" = "RUNNING"
                    }
                    /** AI Solutions Data Sync Spec */
                    export interface DataSyncSpec {
                        /** Direction of the sync */
                        direction: cloud.project.ai.volume.DataSyncEnum;
                        /** True if the user has created the object */
                        manual: boolean;
                        /** Only sync this volume */
                        volume ? : string;
                    }
                    /** State of the data sync */
                    export enum DataSyncStateEnum {
                        "DONE" = "DONE",
                        "ERROR" = "ERROR",
                        "FAILED" = "FAILED",
                        "INTERRUPTED" = "INTERRUPTED",
                        "QUEUED" = "QUEUED",
                        "RUNNING" = "RUNNING"
                    }
                    /** AI Solutions Data Sync Status */
                    export interface DataSyncStatus {
                        /** Date when the data sync ended */
                        endedAt ? : string;
                        /** Information about the data sync */
                        info: cloud.project.ai.Info;
                        /** Progress status of the data sync */
                        progress: cloud.project.ai.volume.Progress[];
                        /** Date when the data sync was queued */
                        queuedAt: string;
                        /** Date when the data sync was started */
                        startedAt ? : string;
                        /** State of the data sync */
                        state: cloud.project.ai.volume.DataSyncStateEnum;
                    }
                    /** AI Solutions private Swift container Volume Object. Deprecated: Use DataStore instead */
                    export interface PrivateSwift {
                        /** Name of the tar archive that needs to be saved */
                        archive ? : string;
                        /** Public Cloud Storage container to attach */
                        container: string;
                        /** True if data is stored on OVHcloud AI's internal storage */
                        internal ? : boolean;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                        /** Public Cloud Storage Region */
                        region: string;
                    }
                    /** AI Solutions Progress Object */
                    export interface Progress {
                        /** Number of completed files */
                        completed: number;
                        /** Progress creation date */
                        createdAt: string;
                        /** Number of deleted files */
                        deleted: number;
                        /** Direction of the progress sync */
                        direction: cloud.project.ai.volume.DataSyncEnum;
                        /** ETA to finish in seconds */
                        eta: number;
                        /** Number of failed files */
                        failed: number;
                        /** Progress Id */
                        id: string;
                        /** Volume information */
                        info: string;
                        /** Number of processed files */
                        processed: number;
                        /** Number of skipped files */
                        skipped: number;
                        /** State of the progress sync */
                        state: cloud.project.ai.volume.DataSyncProgressStateEnum;
                        /** Total number of files */
                        total: number;
                        /** Transferred size in bytes */
                        transferredBytes: number;
                        /** Progress update date */
                        updatedAt: string;
                    }
                    /** AI Solutions public Git repository Volume Object */
                    export interface PublicGit {
                        /** URL of the public git repository */
                        url: string;
                    }
                    /** AI Solutions public Swift container Volume Object */
                    export interface PublicSwift {
                        /** URL of the public swift container */
                        url: string;
                    }
                    /** AI Solutions No Source Volume Object */
                    export interface Standalone {
                        /** Name of the volume */
                        name ? : string;
                    }
                    /** AI Solutions Volume Object */
                    export interface Volume {
                        /** Enable/disable volume caching */
                        cache: boolean;
                        /** Public Cloud Storage container to attach */
                        container ? : string;
                        /** Volume details for data store containers */
                        dataStore ? : cloud.project.ai.volume.DataStore;
                        /** Volume Id. Deprecated: moved to status.volumes[] */
                        id ? : string;
                        /** Path where to mount the data inside the container */
                        mountPath: string;
                        /** Permissions to use on the mounted volume */
                        permission: cloud.project.ai.VolumePermissionEnum;
                        /** Prefix to fetch only part of the volume */
                        prefix ? : string;
                        /** Volume details for private swift containers. Deprecated: Use dataStore instead */
                        privateSwift ? : cloud.project.ai.volume.PrivateSwift;
                        /** Volume details for public git repositories */
                        publicGit ? : cloud.project.ai.volume.PublicGit;
                        /** Volume details for public swift containers */
                        publicSwift ? : cloud.project.ai.volume.PublicSwift;
                        /** Public Cloud Storage Region */
                        region ? : string;
                        /** Volume details for volumes that do not have a datasource */
                        standalone ? : cloud.project.ai.volume.Standalone;
                        /** Target volume details for data store containers */
                        targetDataStore ? : cloud.project.ai.volume.DataStore;
                        /** Target volume details for private swift containers. Deprecated: Use targetDataStore instead */
                        targetPrivateSwift ? : cloud.project.ai.volume.PrivateSwift;
                    }
                    /** AI Solutions Volume Object */
                    export interface VolumeStatus {
                        /** Volume Id */
                        id: string;
                        /** Path where the data is mounted inside the container */
                        mountPath: string;
                        /** User volume Id */
                        userVolumeId: string;
                    }
                } /** Authorization status */
                export interface AuthorizationStatus {
                    /** True if project is authorized to use AI Solutions Platform */
                    authorized: boolean;
                }
                /** AI Solutions basic auth credentials input */
                export interface BasicAuthCredentialsInput {
                    /** Basic Auth Password */
                    password: string;
                    /** Basic Auth Username */
                    username: string;
                }
                /** AI Solutions CLI command */
                export interface Command {
                    /** AI Solutions CLI command */
                    command: string;
                }
                /** AI Solutions data store container Volume Object */
                export interface DataStore {
                    /** Data store alias */
                    alias: string;
                    /** Owner type of the datastore */
                    owner: cloud.project.ai.DataStoreOwnerEnum;
                    /** Type of the datastore */
                    type: cloud.project.ai.DataStoreTypeEnum;
                }
                /** AI Solutions data store auth */
                export interface DataStoreAuth {
                    /** Access key to the datastore */
                    accessKey ? : string;
                    /** Region of the datastore */
                    region ? : string;
                    /** S3 Url of the datastore */
                    s3Url ? : string;
                    /** Secret key to the datastore */
                    secretKey ? : string;
                    /** Swift (or S3) Auth token */
                    token ? : string;
                    /** Swift storage URL */
                    url ? : string;
                }
                /** AI Solutions data store credentials Object */
                export interface DataStoreCredentialsInput {
                    /** Git data store credentials */
                    git ? : cloud.project.ai.GitCredentialsInput;
                    /** S3 data store credentials */
                    s3 ? : cloud.project.ai.S3CredentialsInput;
                }
                /** AI Solutions data store container Volume Object */
                export interface DataStoreInput {
                    /** Data store alias */
                    alias: string;
                    /** Data store credentials */
                    credentials: cloud.project.ai.DataStoreCredentialsInput;
                    /** Datastore endpoint */
                    endpoint: string;
                    /** Data store owner */
                    owner: cloud.project.ai.DataStoreOwnerEnum;
                    /** Data store prefix */
                    prefix ? : string;
                    /** Data store type */
                    type: cloud.project.ai.DataStoreTypeEnum;
                }
                /** Data Store Owner */
                export enum DataStoreOwnerEnum {
                    "customer" = "customer",
                    "ovhcloud" = "ovhcloud"
                }
                /** Data Store Type */
                export enum DataStoreTypeEnum {
                    "git" = "git",
                    "s3" = "s3",
                    "swift" = "swift"
                }
                /** Basic model with a single message field */
                export interface GenericResponse {
                    /** message */
                    message: string;
                }
                /** AI Solutions data store git credentials input */
                export interface GitCredentialsInput {
                    /** Basic Auth data store credentials */
                    basicAuth ? : cloud.project.ai.BasicAuthCredentialsInput;
                    /** SSH data store credentials */
                    sshKeypair ? : cloud.project.ai.SshCredentialsInput;
                }
                /** Information about the state of this entity */
                export interface Info {
                    /** Info code identifier */
                    code: cloud.project.ai.InfoCodeEnum;
                    /** Formatted message */
                    message: string;
                }
                /** Code enum for Info object */
                export enum InfoCodeEnum {
                    "APP_CREATE_ERROR" = "APP_CREATE_ERROR",
                    "APP_ERROR" = "APP_ERROR",
                    "APP_FAILED" = "APP_FAILED",
                    "APP_INITIALIZING" = "APP_INITIALIZING",
                    "APP_INTERRUPTED_BY_PLATFORM" = "APP_INTERRUPTED_BY_PLATFORM",
                    "APP_QUEUED" = "APP_QUEUED",
                    "APP_RUNNING" = "APP_RUNNING",
                    "APP_SCALING" = "APP_SCALING",
                    "APP_STOPPED" = "APP_STOPPED",
                    "APP_STOPPING" = "APP_STOPPING",
                    "COMPATIBILITY" = "COMPATIBILITY",
                    "DATASYNC_AUTHENTICATE_FAILED" = "DATASYNC_AUTHENTICATE_FAILED",
                    "DATASYNC_DATA_STORE_NOT_FOUND" = "DATASYNC_DATA_STORE_NOT_FOUND",
                    "DATASYNC_DONE" = "DATASYNC_DONE",
                    "DATASYNC_ERROR" = "DATASYNC_ERROR",
                    "DATASYNC_FAILED" = "DATASYNC_FAILED",
                    "DATASYNC_INTERRUPTED" = "DATASYNC_INTERRUPTED",
                    "DATASYNC_INVALID_CONTAINER" = "DATASYNC_INVALID_CONTAINER",
                    "DATASYNC_QUEUED" = "DATASYNC_QUEUED",
                    "DATASYNC_RETRY_ERROR" = "DATASYNC_RETRY_ERROR",
                    "DATASYNC_RUNNING" = "DATASYNC_RUNNING",
                    "JOB_CREATE_CONTAINER_CONFIG_ERROR" = "JOB_CREATE_CONTAINER_CONFIG_ERROR",
                    "JOB_CREATE_CONTAINER_ERROR" = "JOB_CREATE_CONTAINER_ERROR",
                    "JOB_DONE" = "JOB_DONE",
                    "JOB_ERROR" = "JOB_ERROR",
                    "JOB_EVICTED" = "JOB_EVICTED",
                    "JOB_FAILED" = "JOB_FAILED",
                    "JOB_FAILED_WITH_MESSAGE" = "JOB_FAILED_WITH_MESSAGE",
                    "JOB_FINALIZING" = "JOB_FINALIZING",
                    "JOB_IMAGE_INSPECT_ERROR" = "JOB_IMAGE_INSPECT_ERROR",
                    "JOB_IMAGE_PULL" = "JOB_IMAGE_PULL",
                    "JOB_IMAGE_PULL_BACKOFF" = "JOB_IMAGE_PULL_BACKOFF",
                    "JOB_INITIALIZING" = "JOB_INITIALIZING",
                    "JOB_INTERRUPTED" = "JOB_INTERRUPTED",
                    "JOB_INTERRUPTED_BY_PLATFORM" = "JOB_INTERRUPTED_BY_PLATFORM",
                    "JOB_INTERRUPTING" = "JOB_INTERRUPTING",
                    "JOB_INVALID_IMAGE_NAME" = "JOB_INVALID_IMAGE_NAME",
                    "JOB_PENDING" = "JOB_PENDING",
                    "JOB_QUEUED" = "JOB_QUEUED",
                    "JOB_REGISTRY_UNAVAILABLE" = "JOB_REGISTRY_UNAVAILABLE",
                    "JOB_RUNNING" = "JOB_RUNNING",
                    "JOB_SYNC_FAILED" = "JOB_SYNC_FAILED",
                    "JOB_TIMEOUT" = "JOB_TIMEOUT",
                    "NOTEBOOK_FAILED" = "NOTEBOOK_FAILED",
                    "NOTEBOOK_FAILED_WITH_MESSAGE" = "NOTEBOOK_FAILED_WITH_MESSAGE",
                    "NOTEBOOK_FINALIZING" = "NOTEBOOK_FINALIZING",
                    "NOTEBOOK_INITIALIZING" = "NOTEBOOK_INITIALIZING",
                    "NOTEBOOK_PENDING" = "NOTEBOOK_PENDING",
                    "NOTEBOOK_RUNNING" = "NOTEBOOK_RUNNING",
                    "NOTEBOOK_STARTING" = "NOTEBOOK_STARTING",
                    "NOTEBOOK_STOPPED" = "NOTEBOOK_STOPPED",
                    "NOTEBOOK_STOPPING" = "NOTEBOOK_STOPPING",
                    "NOTEBOOK_SYNC_FAILED" = "NOTEBOOK_SYNC_FAILED"
                }
                /** AI Solutions Label Object */
                export interface Label {
                    /** Name of the label to update/add */
                    name: string;
                    /** Value of the label to update/add, is there is no value the label is deleted */
                    value ? : string;
                }
                /** Log line */
                export interface LogLine {
                    /** Content of the log */
                    content ? : string;
                    /** Datetime of the log */
                    timestamp ? : string;
                }
                /** Instance Logs */
                export interface Logs {
                    /** Last activity date */
                    lastActivity ? : string;
                    /** Logs lines */
                    logs: cloud.project.ai.LogLine[];
                }
                /** Possible value to order result */
                export enum OrderEnum {
                    "asc" = "asc",
                    "desc" = "desc"
                }
                /** AI Solutions Resource Object */
                export interface Resources {
                    /** Number of vCPU resources requested */
                    cpu: number;
                    /** The amount of ephemeral storage in bytes */
                    ephemeralStorage: number;
                    /** Current instance flavor */
                    flavor: string;
                    /** Number of GPU resources requested */
                    gpu: number;
                    /** The GPU Brand */
                    gpuBrand ? : string;
                    /** The GPU Memory in bits */
                    gpuMemory ? : number;
                    /** The GPU Model */
                    gpuModel ? : string;
                    /** The amount of memory in bytes */
                    memory: number;
                    /** The guarantee private bandwidth in bytes per seconds */
                    privateNetwork: number;
                    /** The guarantee public bandwidth in bytes per seconds */
                    publicNetwork: number;
                }
                /** AI Solutions Resource Object */
                export interface ResourcesInput {
                    /** Number of vCPU resources requested */
                    cpu ? : number;
                    /** The amount of ephemeral storage in bytes */
                    ephemeralStorage ? : number;
                    /** Instance flavor */
                    flavor ? : string;
                    /** Number of GPU resources requested */
                    gpu ? : number;
                    /** The GPU Brand */
                    gpuBrand ? : string;
                    /** The GPU Memory in bytes */
                    gpuMemory ? : number;
                    /** The GPU Model */
                    gpuModel ? : string;
                    /** The amount of memory in bytes */
                    memory ? : number;
                    /** The private network bandwidth in bits per seconds */
                    privateNetwork ? : number;
                    /** The public network bandwidth in bits per seconds */
                    publicNetwork ? : number;
                }
                /** AI Solutions S3 credentials */
                export interface S3CredentialsInput {
                    /** S3 Access Key */
                    accessKey: string;
                    /** S3 Region */
                    region: string;
                    /** S3 Private Key */
                    secretKey: string;
                }
                /** Shutdown strategy of an instance */
                export enum ShutdownStrategyEnum {
                    "Stop" = "Stop"
                }
                /** AI Solutions SSH credentials input */
                export interface SshCredentialsInput {
                    /** SSH private key */
                    privateKey: string;
                    /** SSH public key */
                    publicKey: string;
                }
                /** Role granted with an application token */
                export enum TokenRoleEnum {
                    "ai_training_operator" = "ai_training_operator",
                    "ai_training_read" = "ai_training_read"
                }
                /** Permissions to apply on a volume */
                export enum VolumePermissionEnum {
                    "RO" = "RO",
                    "RW" = "RW",
                    "RWD" = "RWD"
                }
            }
            export namespace certificate {
                /** Import external certificate */
                export interface Import {
                    /** PEM encoded certificate */
                    cert: string;
                    /** Optional PEM encoded certificate chain */
                    chain ? : string;
                    /** PEM encoded certificate private key */
                    key: string;
                }
                /** Certificate SAN */
                export interface ServerAlternativeName {
                    /** SAN kind */
                    kind: cloud.project.certificate.ServerAlternativeNameKindEnum;
                    /** Name of the given kind */
                    name: string;
                }
                /** SAN kind */
                export enum ServerAlternativeNameKindEnum {
                    "DNS" = "DNS",
                    "EMAIL" = "EMAIL",
                    "IP" = "IP",
                    "URI" = "URI"
                }
            }
            export namespace dataIntegration {
                /** Connector's availability */
                export interface Availability {
                    /** End of life of the connector */
                    endOfLife ? : string;
                    /** Release date of the connector */
                    releaseDate: string;
                    /** Status of the availability */
                    status: cloud.project.database.availability.StatusEnum;
                }
                /** Connector parameters */
                export interface CapabilitiesConnectorParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataIntegration.ParameterValidator;
                }
                /** Connection information */
                export interface Connection {
                    /** Last date of the connection */
                    date ? : string;
                    /** Connection status */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Possible state of connection */
                export enum ConnectionStatusEnum {
                    "CONNECTION_FAILED" = "CONNECTION_FAILED",
                    "CONNECTION_RUNNING" = "CONNECTION_RUNNING",
                    "CONNECTION_SUCCEED" = "CONNECTION_SUCCEED"
                }
                /** Connector information */
                export interface Connector {
                    /** Connector's availability */
                    availability: cloud.project.dataIntegration.Availability;
                    /** Description of the connector */
                    description: string;
                    /** Uri of the documentation */
                    documentationUrl ? : string;
                    /** Connector Id */
                    id: string;
                    /** Connector Name */
                    name: string;
                    /** List of needed parameters */
                    parameters ? : cloud.project.dataIntegration.CapabilitiesConnectorParameter[];
                    /** Version of the connector */
                    version: string;
                }
                /** Destination information */
                export interface Destination {
                    /** Uuid of the connector destination type */
                    connectorId: string;
                    /** Creation date of the destination */
                    creationDate ? : string;
                    /** Destination Id */
                    id: string;
                    /** Last update date of the destination */
                    lastUpdateDate ? : string;
                    /** Name of the destination */
                    name: string;
                    /** List of parameter need for the connector */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Current state of the destination */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Editable destination properties */
                export interface DestinationUpdate {
                    /** Destination Id */
                    id: string;
                    /** Name of the destination */
                    name ? : string;
                    /** List of parameter need for the connector */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Error detail */
                export interface ErrorDetail {
                    /** Error code */
                    code: string;
                    /** Error description */
                    description: string;
                }
                /** Job information */
                export interface Job {
                    /** Creation date of the job */
                    createdAt: string;
                    /** End date of the job */
                    endedAt ? : string;
                    /** Uuid of the job */
                    id: string;
                    /** Start date of the job */
                    startedAt ? : string;
                    /** Current state of the job */
                    status: cloud.project.dataIntegration.StatusEnum;
                }
                /** Input to start a job */
                export interface JobStart {
                    /** List of parameters to use for this job */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Metadata from source */
                export interface Metadata {
                    /** End date of the metadata extraction */
                    endedAt ? : string;
                    /** Error detail of the metadata extraction */
                    error ? : string;
                    /** Error code of the metadata extraction */
                    errorCode ? : string;
                    /** All metadatas fields from the table */
                    metadata ? : cloud.project.dataIntegration.MetadataDescription[];
                    /** Start date of the metadata extraction */
                    startedAt ? : string;
                    /** Last status of the metadata extraction */
                    status: cloud.project.dataIntegration.MetadataStatusEnum;
                    /** Table name */
                    tableName ? : string;
                }
                /** Metadata description */
                export interface MetadataDescription {
                    /** Cardinality of the field description */
                    cardinality: number;
                    /** Maximum field value */
                    max: number;
                    /** Minimum field value */
                    min: number;
                    /** Field name */
                    name: string;
                    /** Field type */
                    type: string;
                }
                /** Possible state of the metadata extraction */
                export enum MetadataStatusEnum {
                    "FAILED" = "FAILED",
                    "NOT_EXTRACTED" = "NOT_EXTRACTED",
                    "NOT_FOUND" = "NOT_FOUND",
                    "PROCESSING" = "PROCESSING",
                    "STOP" = "STOP",
                    "SUCCESS" = "SUCCESS",
                    "UNKNOWN" = "UNKNOWN"
                }
                /** Parameters of the connector */
                export interface Parameter {
                    /** Name of parameter */
                    name: string;
                    /** Value of parameter */
                    value: string;
                }
                /** Conditions to which the value of parameter must conform */
                export interface ParameterValidator {
                    /** Maximal value of parameter */
                    max ? : number;
                    /** Minimal value of parameter */
                    min ? : number;
                    /** Regex to match value of parameter */
                    regex ? : string;
                }
                /** Source information */
                export interface Source {
                    /** Uuid of the connector source type */
                    connectorId: string;
                    /** Creation date of the source */
                    creationDate ? : string;
                    /** Uuid of the source */
                    id: string;
                    /** Last update date of the source */
                    lastUpdateDate ? : string;
                    /** Name of the source */
                    name: string;
                    /** List of parameter need for the connector */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Current state of the source */
                    status: cloud.project.dataIntegration.ConnectionStatusEnum;
                }
                /** Editable source properties */
                export interface SourceUpdate {
                    /** Uuid of the source */
                    id: string;
                    /** Name of the source */
                    name ? : string;
                    /** List of parameter needed for the connector */
                    parameters ? : cloud.project.dataIntegration.Parameter[];
                }
                /** Possible state of the connector */
                export enum StatusEnum {
                    "COMPLETED" = "COMPLETED",
                    "DELETED" = "DELETED",
                    "FAILED" = "FAILED",
                    "PROVISIONING" = "PROVISIONING",
                    "RUNNING" = "RUNNING",
                    "SUBMITTED" = "SUBMITTED",
                    "TERMINATED" = "TERMINATED",
                    "UNKNOWN" = "UNKNOWN"
                }
                /** Workflow information */
                export interface Workflow {
                    /** Description of the workflow */
                    description ? : string;
                    /** Uuid of the destination to use */
                    destinationId ? : string;
                    /** Name of the destination to use */
                    destinationName ? : string;
                    /** Whether workflow is enabled */
                    enabled: boolean;
                    /** Error detail of the workflow */
                    errorDetail ? : cloud.project.dataIntegration.ErrorDetail;
                    /** Uuid of the workflow */
                    id: string;
                    /** Last jobs execution date  */
                    lastExecutionDate ? : string;
                    /** Name of the workflow */
                    name: string;
                    /** List of parameters for the workflow */
                    parameters: cloud.project.dataIntegration.Parameter[];
                    /** Default region where jobs will run */
                    region: string;
                    /** Schedule of the workflow in cron format */
                    schedule ? : string;
                    /** Uuid of the source to use */
                    sourceId ? : string;
                    /** Name of the source to use */
                    sourceName ? : string;
                    /** Status of the workflow */
                    status: cloud.project.dataIntegration.WorkflowStatusEnum;
                }
                /** Workflow capabilities */
                export interface WorkflowCapabilities {
                    /** Name of the destination connector */
                    destinationConnector: string;
                    /** Uuid of the destination connector */
                    destinationConnectorId: string;
                    /** List of parameters that can be specified for the workflow */
                    parameters: cloud.project.dataIntegration.WorkflowCapabilitiesParameter[];
                    /** Name of the source connector */
                    sourceConnector: string;
                    /** Uuid of the source connector */
                    sourceConnectorId: string;
                }
                /** Workflow available parameters */
                export interface WorkflowCapabilitiesParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Can be overrided when launching a job */
                    overridable: boolean;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataIntegration.ParameterValidator;
                }
                /** Possible state of the worfklow */
                export enum WorkflowStatusEnum {
                    "CREATING" = "CREATING",
                    "ERROR" = "ERROR",
                    "READY" = "READY"
                }
                /** Editable workflow properties */
                export interface WorkflowUpdate {
                    /** Description of the workflow */
                    description ? : string;
                    /** Whether workflow is enabled */
                    enabled ? : boolean;
                    /** Uuid of the workflow */
                    id: string;
                    /** Name of the workflow */
                    name ? : string;
                    /** Schedule of the workflow in cron format */
                    schedule ? : string;
                }
            }
            export namespace dataProcessing {
                export namespace notebook {
                    /** Capabilities of data processing service */
                    export interface Capability {
                        /** Available versions of the engine */
                        availableVersions: cloud.project.dataProcessing.EngineVersion[];
                        /** Name of the engine */
                        name: string;
                        /** Templates of the engine */
                        templates: cloud.project.dataProcessing.CapabilitiesNotebookTemplate[];
                    }
                    /** Data Processing Notebook Object */
                    export interface Notebook {
                        /** Notebook Id */
                        id: string;
                        /** Notebook spec */
                        spec: cloud.project.dataProcessing.notebook.NotebookSpec;
                        /** Notebook Container Status */
                        status: cloud.project.dataProcessing.notebook.NotebookStatus;
                        /** Notebook last update date */
                        updatedAt: string;
                    }
                    /** Data Processing Object to create a notebook */
                    export interface NotebookEnv {
                        /** Engine name to use */
                        engineName ? : string;
                        /** Engine version to use */
                        engineVersion ? : string;
                    }
                    /** Data Processing Notebook Spec Object to create a notebook */
                    export interface NotebookSpec {
                        /** Environment to deploy in this notebook */
                        env: cloud.project.dataProcessing.notebook.NotebookEnv;
                        /** Notebook name */
                        name: string;
                        /** Host region of the notebook */
                        region: string;
                    }
                    /** State of the notebook */
                    export enum NotebookStateEnum {
                        "DELETED" = "DELETED",
                        "FAILED" = "FAILED",
                        "RUNNING" = "RUNNING",
                        "STARTING" = "STARTING",
                        "STOPPED" = "STOPPED",
                        "STOPPING" = "STOPPING"
                    }
                    /** Data Processing Notebook Status Object */
                    export interface NotebookStatus {
                        /** Duration of the notebook in seconds */
                        duration ? : number;
                        /** Information about the notebook */
                        info: cloud.project.dataProcessing.Info;
                        /** Date when the notebook was last started */
                        lastStartedAt ? : string;
                        /** Date when the notebook was last stopped */
                        lastStoppedAt ? : string;
                        /** State of the notebook */
                        state ? : cloud.project.dataProcessing.notebook.NotebookStateEnum;
                        /** Notebook access url */
                        url ? : string;
                    }
                } /** Authorization status */
                export interface AuthorizationStatus {
                    /** True is project is authorized to use Data Processing service */
                    authorized: boolean;
                }
                /** Engine parameters */
                export interface CapabilitiesEngineParameter {
                    /** Default value of parameter */
                    default ? : string;
                    /** Description of parameter */
                    description: string;
                    /** Parameter is mandatory or not */
                    mandatory: boolean;
                    /** Name of parameter */
                    name: string;
                    /** Type of parameter */
                    type: string;
                    /** Validator of parameter */
                    validator: cloud.project.dataProcessing.ParameterValidator;
                }
                /** Engine Template */
                export interface CapabilitiesNotebookTemplate {
                    /** Number of driver cores of the template */
                    driverCores: number;
                    /** Driver memory in bytes of the template */
                    driverMemory: number;
                    /** Driver memory overhead in bytes of the template */
                    driverMemoryOverhead: number;
                    /** Number of executor cores of the template */
                    executorCores: number;
                    /** Executor memory in bytes of the template */
                    executorMemory: number;
                    /** Executor memory overhead in bytes of the template */
                    executorMemoryOverhead: number;
                    /** Number of executors of the template */
                    executorNumber: number;
                    /** ID of the template */
                    id: number;
                    /** Name of the template */
                    name: string;
                }
                /** Engine Template */
                export interface CapabilitiesTemplate {
                    /** Number of cores of the template */
                    cores: number;
                    /** ID of the template */
                    id: number;
                    /** Memory in bytes of the template */
                    memory: number;
                }
                /** Capabilities of data processing service */
                export interface Capability {
                    /** Available versions of the engine */
                    availableVersions: cloud.project.dataProcessing.EngineVersion[];
                    /** Name of the engine */
                    name: string;
                    /** Parameters of the engine */
                    parameters: cloud.project.dataProcessing.CapabilitiesEngineParameter[];
                    /** Templates of the engine */
                    templates: cloud.project.dataProcessing.CapabilitiesTemplate[];
                }
                /** Parameters of the engine */
                export interface EngineParameter {
                    /** Name of parameters */
                    name: string;
                    /** Value of parameters */
                    value: string;
                }
                /** Engine version */
                export interface EngineVersion {
                    /** List of region available of the version */
                    availableRegions: string[];
                    /** Description of the engine */
                    description: string;
                    /** Name of the version */
                    name: string;
                }
                /** Information about the state of this entity */
                export interface Info {
                    /** Info code identifier */
                    code: cloud.project.dataProcessing.InfoCodeEnum;
                    /** Formatted message */
                    message: string;
                }
                /** Code enum for Info object */
                export enum InfoCodeEnum {
                    "APP_CREATE_ERROR" = "APP_CREATE_ERROR",
                    "APP_ERROR" = "APP_ERROR",
                    "APP_FAILED" = "APP_FAILED",
                    "APP_INITIALIZING" = "APP_INITIALIZING",
                    "APP_INTERRUPTED_BY_PLATFORM" = "APP_INTERRUPTED_BY_PLATFORM",
                    "APP_QUEUED" = "APP_QUEUED",
                    "APP_RUNNING" = "APP_RUNNING",
                    "APP_SCALING" = "APP_SCALING",
                    "APP_STOPPED" = "APP_STOPPED",
                    "APP_STOPPING" = "APP_STOPPING",
                    "COMPATIBILITY" = "COMPATIBILITY",
                    "DATASYNC_AUTHENTICATE_FAILED" = "DATASYNC_AUTHENTICATE_FAILED",
                    "DATASYNC_DONE" = "DATASYNC_DONE",
                    "DATASYNC_ERROR" = "DATASYNC_ERROR",
                    "DATASYNC_FAILED" = "DATASYNC_FAILED",
                    "DATASYNC_INTERRUPTED" = "DATASYNC_INTERRUPTED",
                    "DATASYNC_INVALID_CONTAINER" = "DATASYNC_INVALID_CONTAINER",
                    "DATASYNC_QUEUED" = "DATASYNC_QUEUED",
                    "DATASYNC_RETRY_ERROR" = "DATASYNC_RETRY_ERROR",
                    "DATASYNC_RUNNING" = "DATASYNC_RUNNING",
                    "JOB_CREATE_CONTAINER_CONFIG_ERROR" = "JOB_CREATE_CONTAINER_CONFIG_ERROR",
                    "JOB_CREATE_CONTAINER_ERROR" = "JOB_CREATE_CONTAINER_ERROR",
                    "JOB_DONE" = "JOB_DONE",
                    "JOB_ERROR" = "JOB_ERROR",
                    "JOB_EVICTED" = "JOB_EVICTED",
                    "JOB_FAILED" = "JOB_FAILED",
                    "JOB_FAILED_WITH_MESSAGE" = "JOB_FAILED_WITH_MESSAGE",
                    "JOB_FINALIZING" = "JOB_FINALIZING",
                    "JOB_IMAGE_INSPECT_ERROR" = "JOB_IMAGE_INSPECT_ERROR",
                    "JOB_IMAGE_PULL" = "JOB_IMAGE_PULL",
                    "JOB_IMAGE_PULL_BACKOFF" = "JOB_IMAGE_PULL_BACKOFF",
                    "JOB_INITIALIZING" = "JOB_INITIALIZING",
                    "JOB_INTERRUPTED" = "JOB_INTERRUPTED",
                    "JOB_INTERRUPTED_BY_PLATFORM" = "JOB_INTERRUPTED_BY_PLATFORM",
                    "JOB_INTERRUPTING" = "JOB_INTERRUPTING",
                    "JOB_INVALID_IMAGE_NAME" = "JOB_INVALID_IMAGE_NAME",
                    "JOB_PENDING" = "JOB_PENDING",
                    "JOB_QUEUED" = "JOB_QUEUED",
                    "JOB_REGISTRY_UNAVAILABLE" = "JOB_REGISTRY_UNAVAILABLE",
                    "JOB_RUNNING" = "JOB_RUNNING",
                    "JOB_TIMEOUT" = "JOB_TIMEOUT",
                    "NOTEBOOK_FAILED" = "NOTEBOOK_FAILED",
                    "NOTEBOOK_FAILED_WITH_MESSAGE" = "NOTEBOOK_FAILED_WITH_MESSAGE",
                    "NOTEBOOK_FINALIZING" = "NOTEBOOK_FINALIZING",
                    "NOTEBOOK_INITIALIZING" = "NOTEBOOK_INITIALIZING",
                    "NOTEBOOK_PENDING" = "NOTEBOOK_PENDING",
                    "NOTEBOOK_RUNNING" = "NOTEBOOK_RUNNING",
                    "NOTEBOOK_STARTING" = "NOTEBOOK_STARTING",
                    "NOTEBOOK_STOPPED" = "NOTEBOOK_STOPPED",
                    "NOTEBOOK_STOPPING" = "NOTEBOOK_STOPPING"
                }
                /** Job information */
                export interface Job {
                    /** Name of the container where the code and the log of the job is */
                    containerName: string;
                    /** Creation date of the job */
                    creationDate ? : string;
                    /** End date of the job */
                    endDate ? : string;
                    /** Engine of the job */
                    engine: string;
                    /** Parameters of job engine */
                    engineParameters: cloud.project.dataProcessing.EngineParameter[];
                    /** Version of the engine */
                    engineVersion: string;
                    /** UUID of the job */
                    id: string;
                    /** Name */
                    name: string;
                    /** Notebook associated to the job */
                    notebook ? : string;
                    /** Openstack region of the job */
                    region: string;
                    /** Return code of the job */
                    returnCode ? : number;
                    /** Start date of the job */
                    startDate ? : string;
                    /** Current state of the job */
                    status: cloud.project.dataProcessing.StatusEnum;
                    /** Maximum "Time To Live" (in RFC3339 (duration)) of this job, after which it will be automatically terminated */
                    ttl ? : string;
                }
                /** Job Logs */
                export interface JobLogs {
                    /** Logs lines */
                    logs: cloud.project.dataProcessing.LogLine[];
                    /** Address log url */
                    logsAddress ? : string;
                    /** Start date */
                    startDate: string;
                }
                /** Log line */
                export interface LogLine {
                    /** Content of the log */
                    content: string;
                    /** Id of the log */
                    id: number;
                    /** Datetime of the log */
                    timestamp: string;
                }
                /** Conditions to which the value of parameter must conform */
                export interface ParameterValidator {
                    /** Maximal value of parameter */
                    max ? : number;
                    /** Minimal value of parameter */
                    min ? : number;
                    /** Regex to match value of parameter */
                    regex ? : string;
                }
                /** Possible state of the job */
                export enum StatusEnum {
                    "CANCELLING" = "CANCELLING",
                    "COMPLETED" = "COMPLETED",
                    "FAILED" = "FAILED",
                    "PENDING" = "PENDING",
                    "RUNNING" = "RUNNING",
                    "SUBMITTED" = "SUBMITTED",
                    "TERMINATED" = "TERMINATED",
                    "UNKNOWN" = "UNKNOWN"
                }
            }
            export namespace database {
                export namespace availability {
                    /** Possible status for the availability */
                    export enum StatusEnum {
                        "BETA" = "BETA",
                        "DEPRECATED" = "DEPRECATED",
                        "STABLE" = "STABLE"
                    }
                }
                export namespace backup {
                    /** Cloud database backup region definition */
                    export interface Region {
                        /** Name of the region where the backup is stored */
                        name: string;
                    }
                }
                export namespace capabilities {
                    export namespace advancedConfiguration {
                        export namespace property {
                            /** Possible type of the advanced configuration properties */
                            export enum TypeEnum {
                                "boolean" = "boolean",
                                "double" = "double",
                                "long" = "long",
                                "string" = "string"
                            }
                        } /** Specific database engine capability */
                        export interface Property {
                            /** Description of the property */
                            description: string;
                            /** Maximum value for the property if numeric and applicable */
                            maximum ? : number;
                            /** Minimum value for the property if numeric and applicable */
                            minimum ? : number;
                            /** Property name */
                            name: string;
                            /** Data type of the property */
                            type: cloud.project.database.capabilities.advancedConfiguration.property.TypeEnum;
                            /** Possible values for the property if string and applicable */
                            values ? : string[];
                        }
                    }
                    export namespace engine {
                        export namespace storage {
                            /** Possible storage strategy for an engine */
                            export enum StrategyEnum {
                                "distributed" = "distributed",
                                "n/a" = "n/a",
                                "replicated" = "replicated"
                            }
                        }
                    }
                    export namespace integration {
                        export namespace parameter {
                            /** Possible type of an integration capability parameter */
                            export enum TypeEnum {
                                "integer" = "integer",
                                "string" = "string"
                            }
                        } /** Integration capability parameter */
                        export interface Parameter {
                            /** Name of the integration parameter */
                            name: string;
                            /** Type of the integration parameter */
                            type: cloud.project.database.capabilities.integration.parameter.TypeEnum;
                        }
                    } /** Specific database engine capability */
                    export interface Engine {
                        /** Default version used for the engine */
                        defaultVersion: string;
                        /** Description of the engine */
                        description: string;
                        /** Engine name */
                        name: string;
                        /** SSL modes for this engine */
                        sslModes: string[];
                        /** Storage strategy of the engine */
                        storage: cloud.project.database.capabilities.engine.storage.StrategyEnum;
                        /** Versions available for this engine */
                        versions: string[];
                    }
                    /** Cloud Database flavor definition */
                    export interface Flavor {
                        /** Flavor core number */
                        core: number;
                        /** Flavor ram size in GB */
                        memory: number;
                        /** Name of the flavor */
                        name: string;
                        /** Flavor disk size in GB */
                        storage: number;
                    }
                    /** Integration capability between database engines */
                    export interface Integration {
                        /** Destination engine for the integration */
                        destinationEngine: cloud.project.database.EngineEnum;
                        /** Parameters for the integration capability */
                        parameters ? : cloud.project.database.capabilities.integration.Parameter[];
                        /** Source engine for the integration */
                        sourceEngine: cloud.project.database.EngineEnum;
                        /** Type of the integration */
                        type: cloud.project.database.service.integration.TypeEnum;
                    }
                    /** Cloud Database option definition */
                    export interface Option {
                        /** Name of the option */
                        name: string;
                        /** Type of the option */
                        type: cloud.project.database.TypeEnum;
                    }
                    /** Cloud Database plan definition */
                    export interface Plan {
                        /** Automatic backup retention duration */
                        backupRetention: string;
                        /** Description of the plan */
                        description: string;
                        /** Name of the plan */
                        name: string;
                    }
                }
                export namespace kafka {
                    export namespace user {
                        /** Cloud databases kafka user access definition */
                        export interface Access {
                            /** User cert */
                            cert: string;
                            /** User key for the cert */
                            key: string;
                        }
                    } /** Cloud databases kafka acl definition */
                    export interface Acl {
                        /** Acl ID */
                        id: string;
                        /** Permission to give to this username on this topic */
                        permission: string;
                        /** Topic affected by this acl */
                        topic: string;
                        /** Username affected by this acl */
                        username: string;
                    }
                    /** Cloud databases kafka permissions definition */
                    export interface Permissions {
                        /** Names of the permissions */
                        names: string[];
                    }
                    /** Cloud database kafka service definition */
                    export interface Service {
                        /** Time on which backups start every day */
                        backupTime: string;
                        /** Date of the creation of the cluster */
                        createdAt: string;
                        /** Description of the cluster */
                        description: string;
                        /** Disk attributes of the cluster */
                        disk: cloud.project.database.service.Disk;
                        /** List of all endpoints of the service */
                        endpoints: cloud.project.database.service.Endpoint[];
                        /** Name of the engine of the service */
                        engine: cloud.project.database.EngineEnum;
                        /** The VM flavor used for this cluster */
                        flavor: string;
                        /** Service ID */
                        id: string;
                        /** IP Blocks authorized to access to the cluster */
                        ipRestrictions: cloud.project.database.service.IpRestriction[];
                        /** Time on which maintenances can start every day */
                        maintenanceTime: string;
                        /** Private network ID in which the cluster is */
                        networkId ? : string;
                        /** Type of network of the cluster */
                        networkType: cloud.project.database.NetworkTypeEnum;
                        /** Number of nodes in the cluster */
                        nodeNumber: number;
                        /** Plan of the cluster */
                        plan: string;
                        /** Defines whether the REST API is enabled on the cluster */
                        restApi: boolean;
                        /** Defines whether the schema registry is enabled on the cluster */
                        schemaRegistry: boolean;
                        /** Current status of the cluster */
                        status: cloud.project.database.StatusEnum;
                        /** Private subnet ID in which the cluster is */
                        subnetId ? : string;
                        /** Version of the engine deployed on the cluster */
                        version: string;
                    }
                    /** Cloud database kafka topic definition */
                    export interface Topic {
                        /** Topic ID */
                        id: string;
                        /** Minimum insync replica accepted for this topic */
                        minInsyncReplicas: number;
                        /** Name of the topic */
                        name: string;
                        /** Number of partitions for this topic */
                        partitions: number;
                        /** Number of replication for this topic */
                        replication: number;
                        /** Number of bytes for the retention of the data for this topic */
                        retentionBytes: number;
                        /** Number of hours for the retention of the data for this topic */
                        retentionHours: number;
                    }
                    /** Cloud database kafka topic creation definition */
                    export interface TopicCreation {
                        /** Topic ID */
                        id: string;
                        /** Minimum insync replica accepted for this topic */
                        minInsyncReplicas: number;
                        /** Name of the topic */
                        name: string;
                        /** Number of partitions for this topic */
                        partitions: number;
                        /** Number of replication for this topic */
                        replication: number;
                        /** Number of bytes for the retention of the data for this topic */
                        retentionBytes: number;
                        /** Number of hours for the retention of the data for this topic */
                        retentionHours: number;
                    }
                }
                export namespace kafkaConnect {
                    export namespace capabilities {
                        export namespace connector {
                            export namespace configuration {
                                /** KafkaConnect connector config property definition */
                                export interface Property {
                                    /** Defines the default value is exists */
                                    defaultValue ? : string;
                                    /** Description of the property */
                                    description: string;
                                    /** Pretty name of the property */
                                    displayName: string;
                                    /** Group to which belongs the property */
                                    group: string;
                                    /** Importance of the property */
                                    importance: cloud.project.database.kafkaConnect.capabilities.connector.property.ImportanceEnum;
                                    /** Name of the property */
                                    name: string;
                                    /** Defines whether the property is required */
                                    required: boolean;
                                    /** Type of data of the property */
                                    type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                                    /** Possible values for the property if string and applicable */
                                    values ? : string[];
                                }
                            }
                            export namespace property {
                                /** Possible importance for the kafka connectors properties */
                                export enum ImportanceEnum {
                                    "high" = "high",
                                    "low" = "low",
                                    "medium" = "medium"
                                }
                            } /** KafkaConnect connector transform definition */
                            export interface Transform {
                                /** Description of the transform */
                                description: string;
                                /** Pretty name of the transform */
                                displayName: string;
                                /** Name of the transform */
                                name: string;
                                /** Defines whether the transform is required */
                                required: boolean;
                                /** Transform type this transform relates to */
                                transformType: string;
                                /** Type of data of the transform */
                                type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                                /** Possible values for the transform if applicable */
                                values ? : string[];
                            }
                            /** Possible types for the kafka connectors */
                            export enum TypeEnum {
                                "sink" = "sink",
                                "source" = "source"
                            }
                        } /** KafkaConnect connector capability definition */
                        export interface Connector {
                            /** Name of the connector's author */
                            author: string;
                            /** URL of the official documentation of the connector */
                            documentationUrl: string;
                            /** Connector ID */
                            id: string;
                            /** Defines whether this connector and version is the latest available */
                            latest: boolean;
                            /** Name of the connector */
                            name: string;
                            /** Defines whether the connector is in preview */
                            preview: boolean;
                            /** Type of connector */
                            type: cloud.project.database.kafkaConnect.capabilities.connector.TypeEnum;
                            /** Version of the connector */
                            version: string;
                        }
                    }
                    export namespace connector {
                        export namespace property {
                            /** Possible types for the kafka connectors properties */
                            export enum TypeEnum {
                                "boolean" = "boolean",
                                "class" = "class",
                                "double" = "double",
                                "int16" = "int16",
                                "int32" = "int32",
                                "int64" = "int64",
                                "list" = "list",
                                "password" = "password",
                                "string" = "string",
                                "transform" = "transform"
                            }
                        }
                        export namespace task {
                            /** Possible state of connector task */
                            export enum StatusEnum {
                                "FAILED" = "FAILED",
                                "PAUSED" = "PAUSED",
                                "RUNNING" = "RUNNING"
                            }
                        } /** Possible state of connector */
                        export enum StatusEnum {
                            "CREATING" = "CREATING",
                            "FAILED" = "FAILED",
                            "PAUSED" = "PAUSED",
                            "RUNNING" = "RUNNING",
                            "UNASSIGNED" = "UNASSIGNED"
                        }
                        /** KafkaConnect connector definition */
                        export interface Task {
                            /** Task ID */
                            id: number;
                            /** Status of the task */
                            status: cloud.project.database.kafkaConnect.connector.task.StatusEnum;
                            /** Trace of the task */
                            trace: string;
                        }
                    } /** KafkaConnect connector definition */
                    export interface Connector {
                        /** Configuration of the connector */
                        configuration: Record < string,
                        string > ;
                        /** Connector capability ID */
                        connectorId: string;
                        /** Connector ID */
                        id: string;
                        /** Name of the connector */
                        name: string;
                        /** Status of the connector */
                        status: cloud.project.database.kafkaConnect.connector.StatusEnum;
                    }
                    /** KafkaConnect connector definition */
                    export interface ConnectorCreation {
                        /** Configuration of the connector */
                        configuration: Record < string,
                        string > ;
                        /** Connector capability ID */
                        connectorId: string;
                        /** Name of the connector */
                        name: string;
                    }
                }
                export namespace m3db {
                    export namespace namespace {
                        /** M3db namespace retention definition */
                        export interface Retention {
                            /** Controls how long we wait before expiring stale data */
                            blockDataExpirationDuration ? : string;
                            /** Controls how long to keep a block in memory before flushing to a fileset on disk */
                            blockSizeDuration ? : string;
                            /** Controls how far into the future writes to the namespace will be accepted */
                            bufferFutureDuration ? : string;
                            /** Controls how far into the past writes to the namespace will be accepted */
                            bufferPastDuration ? : string;
                            /** Controls the duration of time that M3DB will retain data for the namespace */
                            periodDuration: string;
                        }
                        /** Possible type of the service integration */
                        export enum TypeEnum {
                            "aggregated" = "aggregated",
                            "unaggregated" = "unaggregated"
                        }
                    } /** M3db Namespace definition */
                    export interface Namespace {
                        /** Namespace ID */
                        id: string;
                        /** Name of the namespace */
                        name: string;
                        /** Resolution for an aggregated namespace */
                        resolution ? : string;
                        /** Retention configuration */
                        retention: cloud.project.database.m3db.namespace.Retention;
                        /** Defines whether M3db will create snapshot files for this namespace */
                        snapshotEnabled: boolean;
                        /** Type of namespace */
                        type: cloud.project.database.m3db.namespace.TypeEnum;
                        /** Defines whether M3db will include writes to this namespace in the commit log */
                        writesToCommitLogEnabled: boolean;
                    }
                    /** M3db Namespace creation definition */
                    export interface NamespaceCreation {
                        /** Namespace ID */
                        id: string;
                        /** Name of the namespace */
                        name: string;
                        /** Resolution for an aggregated namespace */
                        resolution: string;
                        /** Retention configuration */
                        retention: cloud.project.database.m3db.namespace.Retention;
                        /** Defines whether M3db will create snapshot files for this namespace */
                        snapshotEnabled: boolean;
                        /** Type of namespace */
                        type: cloud.project.database.m3db.namespace.TypeEnum;
                        /** Defines whether M3db will include writes to this namespace in the commit log */
                        writesToCommitLogEnabled: boolean;
                    }
                    /** M3db User definition */
                    export interface User {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** Group of the user */
                        group: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    export interface UserCreation {
                        /** Group of the user */
                        group: string;
                        /** Name of the user */
                        name: string;
                    }
                    /** M3db User definition */
                    export interface UserWithPassword {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** Group of the user */
                        group: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                export namespace mysql {
                    export namespace querystatistics {
                        /** Cloud database mysql single query statistic definition */
                        export interface Query {
                            /** Average wait time of the summarized timed events */
                            avgTimerWait: number;
                            /** Number of summarized events. This value includes all events, whether timed or nontimed */
                            countStar: number;
                            /** Digest of the summarized events */
                            digest: string;
                            /** Text of the summarized digest events */
                            digestText: string;
                            /** First appearance of the events */
                            firstSeen: string;
                            /** Last appearance of the events */
                            lastSeen: string;
                            /** Maximum wait time of the summarized timed events */
                            maxTimerWait: number;
                            /** Mininum wait time of the summarized timed events */
                            minTimerWait: number;
                            /** 95th percentile of the statement latency, in picoseconds */
                            quantile95: number;
                            /** 99th percentile of the statement latency, in picoseconds */
                            quantile99: number;
                            /** 99.9th percentile of the statement latency, in picoseconds */
                            quantile999: number;
                            /** Datetime when the querySampleText column was seen */
                            querySampleSeen: string;
                            /** Sample SQL statement that produces the digest value in the row */
                            querySampleText: string;
                            /** Wait time for the sample statement in the querySampleText column */
                            querySampleTimerWait: number;
                            /** SchemaName of the summarized events */
                            schemaName: string;
                            /** Number of internal on-disk temporary tables created */
                            sumCreatedTmpDiskTables: number;
                            /** Number of internal temporary tables created */
                            sumCreatedTmpTables: number;
                            /** Number of errors */
                            sumErrors: number;
                            /** Sum of lock time of the summarized timed events */
                            sumLockTime: number;
                            /** Sum of not good indexes of the summarized timed events */
                            sumNoGoodIndexUsed: number;
                            /** Sum of no indexes of the summarized timed events */
                            sumNoIndexUsed: number;
                            /** Sum of rows affected of the summarized timed events */
                            sumRowsAffected: number;
                            /** Sum of rows examined of the summarized timed events */
                            sumRowsExamined: number;
                            /** Sum of rows sent of the summarized timed events */
                            sumRowsSent: number;
                            /** Sum of select full join of the summarized timed events */
                            sumSelectFullJoin: number;
                            /** Sum of select full range join of the summarized timed events */
                            sumSelectFullRangeJoin: number;
                            /** Sum of select range of the summarized timed events */
                            sumSelectRange: number;
                            /** Sum of select range check of the summarized timed events */
                            sumSelectRangeCheck: number;
                            /** Sum of select scan of the summarized timed events */
                            sumSelectScan: number;
                            /** Sum of sorted merge passes of the summarized timed events */
                            sumSortMergePasses: number;
                            /** Sum of sorted range of the summarized timed events */
                            sumSortRange: number;
                            /** Sum of sorted rows of the summarized timed events */
                            sumSortRows: number;
                            /** Sum of sort scan of the summarized timed events */
                            sumSortScan: number;
                            /** Sum of wait time of the summarized timed events */
                            sumTimerWait: number;
                            /** Number of warnings */
                            sumWarnings: number;
                        }
                    } /** Cloud database mysql query statistics response body definition */
                    export interface QueryStatistics {
                        /** Statistics of the queries */
                        queries: cloud.project.database.mysql.querystatistics.Query[];
                    }
                }
                export namespace opensearch {
                    /** Cloud database opensearch index definition */
                    export interface Index {
                        /** Date of the creation of the index */
                        createdAt: string;
                        /** Number of documents hold by the index */
                        documents: number;
                        /** Index ID */
                        id: string;
                        /** Name of the index */
                        name: string;
                        /** Number of replicas of the index */
                        replicasNumber: number;
                        /** Number of shards of the index */
                        shardsNumber: number;
                        /** Size of the index */
                        size: number;
                    }
                    /** Cloud database opensearch pattern definition */
                    export interface Pattern {
                        /** Pattern ID */
                        id: string;
                        /** Maximum number of index for this pattern */
                        maxIndexCount: number;
                        /** Pattern format */
                        pattern: string;
                    }
                    /** Cloud database opensearch permissions definition */
                    export interface Permissions {
                        /** Possible values for the permissions */
                        names: string[];
                    }
                    /** Cloud database opensearch service definition */
                    export interface Service {
                        /** Defines whether the acls are enabled on the cluster */
                        aclsEnabled: boolean;
                        /** Time on which backups start every day. DEPRECATED: use backups.time */
                        backupTime: string;
                        /** Information related to the backups, null if the engine does not support backups */
                        backups ? : cloud.project.database.service.Backup;
                        /** Date of the creation of the cluster */
                        createdAt: string;
                        /** Description of the cluster */
                        description: string;
                        /** Disk attributes of the cluster */
                        disk: cloud.project.database.service.Disk;
                        /** List of all endpoints of the service */
                        endpoints: cloud.project.database.service.Endpoint[];
                        /** Name of the engine of the service */
                        engine: cloud.project.database.EngineEnum;
                        /** The VM flavor used for this cluster */
                        flavor: string;
                        /** Service ID */
                        id: string;
                        /** IP Blocks authorized to access to the cluster */
                        ipRestrictions: cloud.project.database.service.IpRestriction[];
                        /** Time on which maintenances can start every day */
                        maintenanceTime: string;
                        /** Private network ID in which the cluster is */
                        networkId ? : string;
                        /** Type of network of the cluster */
                        networkType: cloud.project.database.NetworkTypeEnum;
                        /** Number of nodes in the cluster */
                        nodeNumber: number;
                        /** Plan of the cluster */
                        plan: string;
                        /** Current status of the cluster */
                        status: cloud.project.database.StatusEnum;
                        /** Private subnet ID in which the cluster is */
                        subnetId ? : string;
                        /** Version of the engine deployed on the cluster */
                        version: string;
                    }
                    /** Opensearch user definition */
                    export interface User {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** Opensearch user acl definition */
                    export interface UserAcl {
                        /** Pattern of the ACL */
                        pattern: string;
                        /** Permission of the ACL */
                        permission: string;
                    }
                    /** Opensearch user creation definition */
                    export interface UserCreation {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Name of the user */
                        name: string;
                    }
                    /** Opensearch user definition */
                    export interface UserWithPassword {
                        /** Acls of the user */
                        acls: cloud.project.database.opensearch.UserAcl[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                export namespace postgresql {
                    export namespace connectionpool {
                        /** Possible modes for the connection pools */
                        export enum ModeEnum {
                            "session" = "session",
                            "statement" = "statement",
                            "transaction" = "transaction"
                        }
                        /** Possible ssl modes for the connection pools */
                        export enum SslModeEnum {
                            "require" = "require"
                        }
                    }
                    export namespace querystatistics {
                        /** Cloud database postgresql single query statistic definition */
                        export interface Query {
                            /** Time spent reading data file blocks by backends in this database, in milliseconds */
                            blkReadTime: number;
                            /** Time spent writing data file blocks by backends in this database, in milliseconds */
                            blkWriteTime: number;
                            /** Number of times this function has been called */
                            calls: number;
                            /** Name of the database */
                            databaseName: string;
                            /** Total number of local blocks dirtied by the statement */
                            localBlksDirtied: number;
                            /** Total number of local block cache hits by the statement */
                            localBlksHit: number;
                            /** Total number of local blocks read by the statement */
                            localBlksRead: number;
                            /** Total number of local blocks written by the statement */
                            localBlksWritten: number;
                            /** Maximum time spent planning the statement, in milliseconds */
                            maxPlanTime: number;
                            /** Maximum time spent for the statement, in milliseconds */
                            maxTime: number;
                            /** Mean time spent planning the statement, in milliseconds */
                            meanPlanTime: number;
                            /** Mean time spent for the statement, in milliseconds */
                            meanTime: number;
                            /** Minimum time spent planning the statement, in milliseconds */
                            minPlanTime: number;
                            /** Minimum time spent for the statement, in milliseconds */
                            minTime: number;
                            /** Text of a representative statement */
                            query: string;
                            /** Total number of rows retrieved or affected by the statement */
                            rows: number;
                            /** Total number of shared blocks dirtied by the statement */
                            sharedBlksDirtied: number;
                            /** Total number of shared block cache hits by the statement */
                            sharedBlksHit: number;
                            /** Total number of shared blocks read by the statement */
                            sharedBlksRead: number;
                            /** Total number of shared blocks written by the statement */
                            sharedBlksWritten: number;
                            /** Population standard deviation of time spent planning the statement, in milliseconds */
                            stddevPlanTime: number;
                            /** Population standard deviation of time spent for the statement, in milliseconds */
                            stddevTime: number;
                            /** Total number of temp blocks read by the statement */
                            tempBlksRead: number;
                            /** Total number of temp blocks written by the statement */
                            tempBlksWritten: number;
                            /** Total time spent planning the statement, in milliseconds */
                            totalPlanTime: number;
                            /** Total time spent for the statement, in milliseconds */
                            totalTime: number;
                            /** Name of the user who executed the statement */
                            username: string;
                            /** Total amount of WAL generated by the statement in bytes */
                            walBytes: complexType.UnitAndValue < long > ;
                            /** Total number of WAL full page images generated by the statement */
                            walFpi: number;
                            /** Total number of WAL records generated by the statement */
                            walRecords: number;
                        }
                    } /** Cloud database postgresql connection pool response body definition */
                    export interface ConnectionPool {
                        /** Database used for the connection pool */
                        databaseId: string;
                        /** ID of the connection pool */
                        id: string;
                        /** Connection mode to the connection pool */
                        mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                        /** Name of the connection pool */
                        name: string;
                        /** Port of the connection pool */
                        port: number;
                        /** Size of the connection pool */
                        size: number;
                        /** Ssl connection mode for the pool */
                        sslMode ? : cloud.project.database.postgresql.connectionpool.SslModeEnum;
                        /** Connection URI to the pool */
                        uri: string;
                        /** User authorized to connect to the pool, if none all the users are allowed */
                        userId ? : string;
                    }
                    /** Cloud database postgresql connection pool creation body definition */
                    export interface ConnectionPoolCreation {
                        /** Database used for the connection pool */
                        databaseId: string;
                        /** Connection mode to the connection pool */
                        mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                        /** Name of the connection pool */
                        name: string;
                        /** Size of the connection pool */
                        size: number;
                        /** User authorized to connect to the pool, if none all the users are allowed */
                        userId ? : string;
                    }
                    /** Cloud database postgresql query statistics response body definition */
                    export interface QueryStatistics {
                        /** Statistics of the queries */
                        queries: cloud.project.database.postgresql.querystatistics.Query[];
                    }
                }
                export namespace redis {
                    /** Redis user definition */
                    export interface User {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Keys of the user */
                        keys: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** Redis user definition */
                    export interface UserCreation {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Keys of the user */
                        keys: string[];
                        /** Name of the user */
                        name: string;
                    }
                    /** Redis user with password definition */
                    export interface UserWithPassword {
                        /** Categories of the user */
                        categories: string[];
                        /** Channels of the user */
                        channels: string[];
                        /** Commands of the user */
                        commands: string[];
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Keys of the user */
                        keys: string[];
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                }
                export namespace service {
                    export namespace creation {
                        /** Defines the source to fork a cluster from a backup. DEPRECATED: use forkFrom */
                        export interface BackupFork {
                            /** Backup ID (not compatible with pointInTime) */
                            id: string;
                            /** Point in time to restore from (not compatible with id) */
                            pointInTime: string;
                            /** Service ID to which the backups belong to */
                            serviceId: string;
                        }
                        /** Defines the source to fork a cluster from a backup */
                        export interface ForkFrom {
                            /** Backup ID (not compatible with pointInTime) */
                            backupId: string;
                            /** Point in time to restore from (not compatible with id) */
                            pointInTime: string;
                            /** Service ID to which the backups belong to */
                            serviceId: string;
                        }
                    }
                    export namespace currentqueries {
                        export namespace query {
                            /** Cloud database service current queries query cancel request */
                            export interface CancelRequest {
                                /** Database server connection ID */
                                pid: number;
                                /** Request immediate termination instead of soft cancel */
                                terminate: boolean;
                            }
                            /** Cloud database service current queries query cancel response */
                            export interface CancelResponse {
                                /** Status reported by the database server */
                                success: boolean;
                            }
                        } /** Cloud database service current queries query definition */
                        export interface Query {
                            /** Application name */
                            applicationName: string;
                            /** Backend start timestamp */
                            backendStart ? : string;
                            /** Backend type */
                            backendType ? : string;
                            /** XID for current backend */
                            backendXid ? : number;
                            /** Xmin for current backend */
                            backendXmin ? : number;
                            /** Client hostname */
                            clientHostname ? : string;
                            /** Client ip address */
                            clientIp ? : string;
                            /** Client port */
                            clientPort ? : number;
                            /** Database ID */
                            databaseId ? : number;
                            /** Database name */
                            databaseName: string;
                            /** Leader process ID */
                            leaderPid ? : number;
                            /** Connection process ID */
                            pid: number;
                            /** Current query running on this connection */
                            query: string;
                            /** Duration of the query in seconds */
                            queryDuration: number;
                            /** Query start timestamp */
                            queryStart ? : string;
                            /** Connection state */
                            state: cloud.project.database.service.currentqueries.StateEnum;
                            /** Connection state change timestamp */
                            stateChange ? : string;
                            /** Transaction start timestamp */
                            transactionStart ? : string;
                            /** User ID */
                            userId ? : number;
                            /** User name */
                            userName: string;
                            /** Connection wait event */
                            waitEvent ? : string;
                            /** Connection wait event type */
                            waitEventType ? : cloud.project.database.service.currentqueries.WaitEventTypeEnum;
                        }
                        /** Possible state of a query */
                        export enum StateEnum {
                            "ACTIVE" = "ACTIVE",
                            "DISABLED" = "DISABLED",
                            "FASTPATH_FUNCTION_CALL" = "FASTPATH_FUNCTION_CALL",
                            "IDLE" = "IDLE",
                            "IDLE_IN_TRANSACTION" = "IDLE_IN_TRANSACTION",
                            "IDLE_IN_TRANSACTION_ABORTED" = "IDLE_IN_TRANSACTION_ABORTED"
                        }
                        /** Possible event type on which the backend is waiting */
                        export enum WaitEventTypeEnum {
                            "ACTIVITY" = "ACTIVITY",
                            "BUFFER_PIN" = "BUFFER_PIN",
                            "CLIENT" = "CLIENT",
                            "EXTENSION" = "EXTENSION",
                            "IO" = "IO",
                            "IPC" = "IPC",
                            "LOCK" = "LOCK",
                            "LWLOCK" = "LWLOCK",
                            "TIMEOUT" = "TIMEOUT"
                        }
                    }
                    export namespace endpoint {
                        /** Defines all the values for the component in the service endpoints */
                        export enum ComponentEnum {
                            "cassandra" = "cassandra",
                            "grafana" = "grafana",
                            "graphite" = "graphite",
                            "influxdb" = "influxdb",
                            "kafka" = "kafka",
                            "kafkaConnect" = "kafkaConnect",
                            "kafkaRestApi" = "kafkaRestApi",
                            "kafkaSASL" = "kafkaSASL",
                            "kafkaSchemaRegistry" = "kafkaSchemaRegistry",
                            "kibana" = "kibana",
                            "m3coordinator" = "m3coordinator",
                            "mongodb" = "mongodb",
                            "mongodbAnalytics" = "mongodbAnalytics",
                            "mongodbSrv" = "mongodbSrv",
                            "mongodbSrvAnalytics" = "mongodbSrvAnalytics",
                            "mysql" = "mysql",
                            "mysqlRead" = "mysqlRead",
                            "mysqlx" = "mysqlx",
                            "opensearch" = "opensearch",
                            "postgresql" = "postgresql",
                            "postgresqlRead" = "postgresqlRead",
                            "postgresqlReadReplica" = "postgresqlReadReplica",
                            "prometheusRead" = "prometheusRead",
                            "prometheusWrite" = "prometheusWrite",
                            "redis" = "redis"
                        }
                    }
                    export namespace integration {
                        /** Possible state of the integration */
                        export enum StatusEnum {
                            "READY" = "READY"
                        }
                        /** Possible type of the service integration */
                        export enum TypeEnum {
                            "grafanaDashboard" = "grafanaDashboard",
                            "grafanaDatasource" = "grafanaDatasource",
                            "kafkaConnect" = "kafkaConnect",
                            "kafkaLogs" = "kafkaLogs",
                            "kafkaMirrorMaker" = "kafkaMirrorMaker",
                            "m3aggregator" = "m3aggregator",
                            "m3dbMetrics" = "m3dbMetrics",
                            "opensearchLogs" = "opensearchLogs",
                            "postgresqlMetrics" = "postgresqlMetrics"
                        }
                    }
                    export namespace maintenance {
                        /** Possible status of a service maintenance */
                        export enum StatusEnum {
                            "APPLIED" = "APPLIED",
                            "APPLYING" = "APPLYING",
                            "ERROR" = "ERROR",
                            "PENDING" = "PENDING",
                            "SCHEDULED" = "SCHEDULED"
                        }
                    }
                    export namespace node {
                        /** Node role values */
                        export enum RoleEnum {
                            "ANALYTICS" = "ANALYTICS",
                            "STANDARD" = "STANDARD"
                        }
                    }
                    export namespace replication {
                        /** Possible type of the service integration */
                        export enum PolicyClassEnum {
                            "org.apache.kafka.connect.mirror.DefaultReplicationPolicy" = "org.apache.kafka.connect.mirror.DefaultReplicationPolicy",
                            "org.apache.kafka.connect.mirror.IdentityReplicationPolicy" = "org.apache.kafka.connect.mirror.IdentityReplicationPolicy"
                        }
                    } /** Cloud database service backups definition */
                    export interface Backup {
                        /** Regions on which the backups are stored */
                        regions: string[];
                        /** Time on which backups start every day */
                        time: string;
                    }
                    /** Certificates definition for cloud project databases */
                    export interface Certificates {
                        /** CA certificate used for the service */
                        ca: string;
                    }
                    /** Cloud database current queries */
                    export interface CurrentQueries {
                        /** Current queries list */
                        queries: cloud.project.database.service.currentqueries.Query[];
                    }
                    /** A single value from a metric */
                    export interface DataPoint {
                        /** Timestamp in seconds since epoch time */
                        timestamp: number;
                        /** Value of this datapoint */
                        value: number;
                    }
                    /** Defines the database object in a cluster */
                    export interface Database {
                        /** Defines if the database has been created by default */
                        default: boolean;
                        /** Database ID */
                        id: string;
                        /** Database name */
                        name: string;
                    }
                    /** Defines the disk attributes of a service */
                    export interface Disk {
                        /** Service disk size  */
                        size: number;
                        /** Service disk size  */
                        type: string;
                    }
                    /** Defines the endpoint object in a cluster */
                    export interface Endpoint {
                        /** Type of component the URI relates to */
                        component: cloud.project.database.service.endpoint.ComponentEnum;
                        /** Domain of the cluster */
                        domain: string;
                        /** Path of the endpoint */
                        path ? : string;
                        /** Connection port for the endpoint */
                        port ? : number;
                        /** Scheme used to generate the URI */
                        scheme ? : string;
                        /** Defines whether the endpoint uses SSL */
                        ssl: boolean;
                        /** SSL mode used to connect to the service if the SSL is enabled */
                        sslMode ? : string;
                        /** URI of the endpoint */
                        uri ? : string;
                    }
                    /** Metrics datapoints from a specific host */
                    export interface HostMetric {
                        /** List of metric's samples */
                        dataPoints: cloud.project.database.service.DataPoint[];
                        /** Name of the originating host */
                        hostname: string;
                    }
                    /** Cloud database service integration definition */
                    export interface Integration {
                        /** ID of the destination service */
                        destinationServiceId: string;
                        /** Service ID */
                        id: string;
                        /** Parameters for the integration */
                        parameters ? : Record < string,
                        string > ;
                        /** ID of the source service */
                        sourceServiceId: string;
                        /** Current status of the integration */
                        status: cloud.project.database.service.integration.StatusEnum;
                        /** Type of the integration */
                        type: cloud.project.database.service.integration.TypeEnum;
                    }
                    /** Ip Restriction definition for cloud project databases */
                    export interface IpRestriction {
                        /** Description of the ip restriction */
                        description: string;
                        /** Whitelisted IP */
                        ip: string;
                        /** Current status of the ip restriction */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** A single log entry */
                    export interface LogEntry {
                        /** Host from which the log is coming from */
                        hostname: string;
                        /** The log message */
                        message: string;
                        /** Timestamp in seconds since epoch time */
                        timestamp: number;
                    }
                    /** Cloud database service maintenance definition */
                    export interface Maintenance {
                        /** Date of the application of the maintenance */
                        appliedAt ? : string;
                        /** Description of the maintenance */
                        description: string;
                        /** ID of the maintenance */
                        id: string;
                        /** Date of the planification of the maintenance */
                        scheduledAt ? : string;
                        /** Status of the maintenance */
                        status: cloud.project.database.service.maintenance.StatusEnum;
                    }
                    /** Metric definition for cloud project databases */
                    export interface Metric {
                        /** Metric values for each cluster's host */
                        metrics: cloud.project.database.service.HostMetric[];
                        /** Name of the metric */
                        name: string;
                        /** Unit of the metric */
                        units: cloud.project.database.service.MetricUnitEnum;
                    }
                    /** Supported metrics query period */
                    export enum MetricPeriodEnum {
                        "lastDay" = "lastDay",
                        "lastHour" = "lastHour",
                        "lastMonth" = "lastMonth",
                        "lastWeek" = "lastWeek",
                        "lastYear" = "lastYear"
                    }
                    /** Supported unit types for metrics */
                    export enum MetricUnitEnum {
                        "BYTES" = "BYTES",
                        "BYTES_PER_SECOND" = "BYTES_PER_SECOND",
                        "GIGABYTES" = "GIGABYTES",
                        "GIGABYTES_PER_HOUR" = "GIGABYTES_PER_HOUR",
                        "MEGABYTES" = "MEGABYTES",
                        "MEGABYTES_PER_SECOND" = "MEGABYTES_PER_SECOND",
                        "MILLISECONDS" = "MILLISECONDS",
                        "PERCENT" = "PERCENT",
                        "SCALAR" = "SCALAR",
                        "SCALAR_PER_SECOND" = "SCALAR_PER_SECOND",
                        "SECONDS" = "SECONDS",
                        "UNKNOWN" = "UNKNOWN"
                    }
                    /** Cloud databases cluster node definition */
                    export interface Node {
                        /** Date of the creation of the node */
                        createdAt: string;
                        /** Flavor of the node */
                        flavor: string;
                        /** Node ID */
                        id: string;
                        /** Name of the node */
                        name: string;
                        /** Connection port for the node */
                        port: number;
                        /** Region of the node */
                        region: string;
                        /** Role of the node */
                        role ? : cloud.project.database.service.node.RoleEnum;
                        /** Current status of the node */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** Cloud databases cluster new node definition */
                    export interface NodeCreation {
                        /** Date of the creation of the node */
                        createdAt: string;
                        /** Flavor of the node */
                        flavor: string;
                        /** Node ID */
                        id: string;
                        /** Name of the node */
                        name: string;
                        /** Connection port for the node */
                        port: number;
                        /** Region of the node */
                        region: string;
                        /** Role of the node */
                        role ? : cloud.project.database.service.node.RoleEnum;
                        /** Current status of the node */
                        status: cloud.project.database.StatusEnum;
                    }
                    /** Node pattern definition */
                    export interface NodePattern {
                        /** Flavor of the nodes */
                        flavor: string;
                        /** Number of nodes to create */
                        number: number;
                        /** Region of the nodes */
                        region: string;
                    }
                    /** Cloud database service replication definition */
                    export interface Replication {
                        /** Defines whether heartbeats are emitted */
                        emitHeartbeats: boolean;
                        /** Defines whether the replication is actived */
                        enabled: boolean;
                        /** Service ID */
                        id: string;
                        /** ReplicationPolicyClass used for the replication */
                        replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                        /** ID of the integration source */
                        sourceIntegration: string;
                        /** Defines whether the group offsets must be sync */
                        syncGroupOffsets: boolean;
                        /** Defines the interval in second between 2 sync */
                        syncInterval: number;
                        /** ID of the integration target */
                        targetIntegration: string;
                        /** Patterns of the topics to exclude from the replication */
                        topicExcludeList: string[];
                        /** Patterns of the topics to replicate */
                        topics: string[];
                    }
                    /** Cloud database service replication definition */
                    export interface ReplicationCreation {
                        /** Defines whether heartbeats are emitted */
                        emitHeartbeats: boolean;
                        /** Defines whether the replication is actived */
                        enabled: boolean;
                        /** ReplicationPolicyClass used for the replication */
                        replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                        /** ID of the integration source */
                        sourceIntegration: string;
                        /** Defines whether the group offsets must be sync */
                        syncGroupOffsets: boolean;
                        /** Defines the interval in second between 2 sync */
                        syncInterval: number;
                        /** ID of the integration target */
                        targetIntegration: string;
                        /** Patterns of the topics to exclude from the replication */
                        topicExcludeList: string[];
                        /** Patterns of the topics to replicate */
                        topics: string[];
                    }
                    /** Cloud database service restore specification */
                    export interface Restore {
                        /** point in time to restore from */
                        pointInTime: string;
                    }
                    /** User definition */
                    export interface User {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    export interface UserCreation {
                        /** Name of the user */
                        name: string;
                    }
                    /** User with password definition */
                    export interface UserWithPassword {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User with password definition */
                    export interface UserWithPasswordAndRoles {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Password of the user */
                        password: string;
                        /** Roles the user belongs to */
                        roles: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User definition */
                    export interface UserWithRoles {
                        /** Date of the creation of the user */
                        createdAt: string;
                        /** User ID */
                        id: string;
                        /** Roles the user belongs to */
                        roles: string[];
                        /** Current status of the user */
                        status: cloud.project.database.StatusEnum;
                        /** Name of the user */
                        username: string;
                    }
                    /** User creation definition */
                    export interface UserWithRolesCreation {
                        /** Name of the user */
                        name: string;
                        /** Roles the user belongs to */
                        roles: string[];
                    }
                } /** Availability of databases engines on cloud projects */
                export interface Availability {
                    /** Defines the type of backup */
                    backup: cloud.project.database.BackupTypeEnum;
                    /** Backup retention time of the availability in days */
                    backupRetentionDays: number;
                    /** Whether this availability can be used by default */
                    default: boolean;
                    /** End of life of the product */
                    endOfLife ? : string;
                    /** Database engine name */
                    engine: string;
                    /** Flavor name */
                    flavor: string;
                    /** Maximum possible disk size in GB */
                    maxDiskSize: number;
                    /** Maximum nodes of the cluster */
                    maxNodeNumber: number;
                    /** Minimum possible disk size in GB */
                    minDiskSize: number;
                    /** Minimum nodes of the cluster */
                    minNodeNumber: number;
                    /** Type of network */
                    network: cloud.project.database.NetworkTypeEnum;
                    /** Plan name */
                    plan: string;
                    /** Region name */
                    region: string;
                    /** Date of the release of the product */
                    startDate: string;
                    /** Status of the availability */
                    status: cloud.project.database.availability.StatusEnum;
                    /** Flex disk size step in GB */
                    stepDiskSize: number;
                    /** End of life of the upstream product */
                    upstreamEndOfLife ? : string;
                    /** Version name */
                    version: string;
                }
                /** Cloud database backup definition */
                export interface Backup {
                    /** Date of the creation of the backup */
                    createdAt: string;
                    /** Description of the backup */
                    description: string;
                    /** Backup ID */
                    id: string;
                    /** Region where the backup is stored. DEPRECATED: use regions */
                    region: string;
                    /** Regions where the backup are stored */
                    regions: cloud.project.database.backup.Region[];
                    /** Size of the backup */
                    size: complexType.UnitAndValue < long > ;
                    /** Current status of the backup */
                    status: cloud.project.database.StatusEnum;
                    /** Type of backup */
                    type: cloud.project.database.BackupTypeEnum;
                }
                /** Type of backup for the cluster */
                export enum BackupTypeEnum {
                    "automatic" = "automatic",
                    "manual" = "manual"
                }
                /** Capabilities available for the databases engines on cloud projects */
                export interface Capabilities {
                    /** Disks available */
                    disks: string[];
                    /** Database engines available */
                    engines: cloud.project.database.capabilities.Engine[];
                    /** Flavors available */
                    flavors: cloud.project.database.capabilities.Flavor[];
                    /** Options available */
                    options: cloud.project.database.capabilities.Option[];
                    /** Plans available */
                    plans: cloud.project.database.capabilities.Plan[];
                    /** Regions available */
                    regions: string[];
                }
                /** Possible names of the engines */
                export enum EngineEnum {
                    "cassandra" = "cassandra",
                    "grafana" = "grafana",
                    "kafka" = "kafka",
                    "kafkaConnect" = "kafkaConnect",
                    "kafkaMirrorMaker" = "kafkaMirrorMaker",
                    "m3aggregator" = "m3aggregator",
                    "m3db" = "m3db",
                    "mongodb" = "mongodb",
                    "mysql" = "mysql",
                    "opensearch" = "opensearch",
                    "postgresql" = "postgresql",
                    "redis" = "redis"
                }
                /** Ip Restriction definition for cloud project databases (DEPRECATED) */
                export interface IpRestriction {
                    /** Description of the ip restriction */
                    description: string;
                    /** Whitelisted IP */
                    ip: string;
                    /** Current status of the ip restriction */
                    status: cloud.project.database.StatusEnum;
                }
                /** Ip Restriction creation definition for cloud project databases (DEPRECATED) */
                export interface IpRestrictionCreation {
                    /** Description of the ip restriction */
                    description: string;
                    /** Whitelisted IP */
                    ip: string;
                }
                /** Type of network in which the databases cluster are */
                export enum NetworkTypeEnum {
                    "private" = "private",
                    "public" = "public"
                }
                /** Cloud database service definition */
                export interface Service {
                    /** Time on which backups start every day. DEPRECATED: use backups.time */
                    backupTime: string;
                    /** Information related to the backups, null if the engine does not support backups */
                    backups ? : cloud.project.database.service.Backup;
                    /** Date of the creation of the cluster */
                    createdAt: string;
                    /** Description of the cluster */
                    description: string;
                    /** Disk attributes of the cluster */
                    disk: cloud.project.database.service.Disk;
                    /** List of all endpoints of the service */
                    endpoints: cloud.project.database.service.Endpoint[];
                    /** Name of the engine of the service */
                    engine: cloud.project.database.EngineEnum;
                    /** The VM flavor used for this cluster */
                    flavor: string;
                    /** Service ID */
                    id: string;
                    /** IP Blocks authorized to access to the cluster */
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    /** Time on which maintenances can start every day */
                    maintenanceTime: string;
                    /** Private network ID in which the cluster is */
                    networkId ? : string;
                    /** Type of network of the cluster */
                    networkType: cloud.project.database.NetworkTypeEnum;
                    /** Number of nodes in the cluster */
                    nodeNumber: number;
                    /** Plan of the cluster */
                    plan: string;
                    /** Current status of the cluster */
                    status: cloud.project.database.StatusEnum;
                    /** Private subnet ID in which the cluster is */
                    subnetId ? : string;
                    /** Version of the engine deployed on the cluster */
                    version: string;
                }
                /** Cloud databases cluster definition */
                export interface ServiceCreation {
                    /** Backup from which the new service is created. DEPRECATED: use forkFrom */
                    backup ? : cloud.project.database.service.creation.BackupFork;
                    /** Time on which backups start every day. DEPRECATED: use backups.time */
                    backupTime ? : string;
                    /** Information related to the backups, null if the engine does not support backups */
                    backups ? : cloud.project.database.service.Backup;
                    /** Description of the cluster */
                    description: string;
                    /** Disk attributes of the cluster */
                    disk: cloud.project.database.service.Disk;
                    /** Backup from which the new service is created */
                    forkFrom ? : cloud.project.database.service.creation.ForkFrom;
                    /** IP Blocks authorized to access to the cluster */
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    /** Time on which maintenances can start every day */
                    maintenanceTime ? : string;
                    /** Private network ID in which the cluster is */
                    networkId ? : string;
                    /** List of nodes in the cluster, not compatible with nodesPattern */
                    nodesList ? : cloud.project.database.service.NodeCreation[];
                    /** Pattern definition of the nodes in the cluster, not compatible with nodesList */
                    nodesPattern ? : cloud.project.database.service.NodePattern;
                    /** Plan of the cluster */
                    plan: string;
                    /** Private subnet ID in which the cluster is */
                    subnetId ? : string;
                    /** Version of the engine deployed on the cluster */
                    version: string;
                }
                /** Possible state of the job */
                export enum StatusEnum {
                    "CREATING" = "CREATING",
                    "DELETING" = "DELETING",
                    "ERROR" = "ERROR",
                    "ERROR_INCONSISTENT_SPEC" = "ERROR_INCONSISTENT_SPEC",
                    "LOCKED" = "LOCKED",
                    "LOCKED_PENDING" = "LOCKED_PENDING",
                    "LOCKED_UPDATING" = "LOCKED_UPDATING",
                    "PENDING" = "PENDING",
                    "READY" = "READY",
                    "UPDATING" = "UPDATING"
                }
                /** Cloud databases temporary write deadline definition */
                export interface TemporaryWriteDeadline {
                    /** Date on which the temporary write permissions would be lifted */
                    until: string;
                }
                /** Type of data returned in the capabilities options */
                export enum TypeEnum {
                    "boolean" = "boolean",
                    "double" = "double",
                    "duration" = "duration",
                    "long" = "long",
                    "string" = "string"
                }
            }
            export namespace floatingIp {
                export namespace associatedEntity {
                    /** Type of the associated entity */
                    export enum TypeEnum {
                        "dhcp" = "dhcp",
                        "instance" = "instance",
                        "loadbalancer" = "loadbalancer",
                        "routerInterface" = "routerInterface",
                        "unknown" = "unknown"
                    }
                } /** Associated entity with a floating ip */
                export interface AssociatedEntity {
                    /** ID of the gateway */
                    gatewayId: string;
                    /** ID of the port */
                    id: string;
                    /** IP of the port */
                    ip: string;
                    /** Type of the port */
                    type: cloud.project.floatingIp.associatedEntity.TypeEnum;
                }
                /** Status of a floating ip */
                export enum StatusEnum {
                    "active" = "active",
                    "down" = "down",
                    "error" = "error"
                }
            }
            export namespace io {
                export namespace stream {
                    /** Region information */
                    export interface Region {
                        /** Endpoint of the region */
                        endpoint: cloud.project.io.stream.RegionEndpoint;
                        /** Region name */
                        region: string;
                    }
                    /** Region information */
                    export interface RegionEndpoint {
                        /** Pulsar endpoint of the stream */
                        pulsar: string;
                    }
                    /** Create a consumer on a stream */
                    export interface Subscription {
                        /** ID of the subscription */
                        id: string;
                        /** Kind of the subscription */
                        kind: cloud.project.io.stream.SubscriptionKindEnum;
                        /** Name of the subscription */
                        name: string;
                    }
                    /** Create a subscription on a stream */
                    export interface SubscriptionCreation {
                        /** Name of the subscription */
                        name: string;
                    }
                    /** Kind of the subscription */
                    export enum SubscriptionKindEnum {
                        "EXCLUSIVE" = "EXCLUSIVE",
                        "FAILOVER" = "FAILOVER",
                        "KEY_SHARED" = "KEY_SHARED",
                        "SHARED" = "SHARED"
                    }
                    /** Get statistic of a subscription */
                    export interface SubscriptionStats {
                        /** Messages waiting to be consumed */
                        lag: number;
                    }
                    /** Token to access a stream */
                    export interface Token {
                        /** Action of the token */
                        action: cloud.project.io.stream.TokenActionEnum;
                        /** ID of the token */
                        id: string;
                        /** Access token */
                        token: string;
                    }
                    /** Action of the token */
                    export enum TokenActionEnum {
                        "BOTH" = "BOTH",
                        "CONSUME" = "CONSUME",
                        "PRODUCE" = "PRODUCE"
                    }
                    /** Create a token to access a stream */
                    export interface TokenCreation {
                        /** Action of the token */
                        action: cloud.project.io.stream.TokenActionEnum;
                    }
                } /** A stream to send data */
                export interface Stream {
                    /** Backlog of the stream in RFC3339 (duration) */
                    backlog: string;
                    /** Description of the stream */
                    description ? : string;
                    /** ID of the stream */
                    id: string;
                    /** Kind of persistence for the stream. */
                    kind: cloud.project.io.StreamKindEnum;
                    /** Name of the stream */
                    name: string;
                    /** Regions where the stream is available */
                    regions: string[];
                    /** Retention of the stream in RFC3339 (duration) */
                    retention: string;
                    /** Status of the stream. */
                    status: cloud.project.io.StreamStatusEnum;
                    /** Throttling of the stream (number of message allowed per second for the stream) */
                    throttling: number;
                }
                /** Create a stream of data */
                export interface StreamCreation {
                    /** Description of the stream */
                    description: string;
                    /** Kind of the stream */
                    kind: cloud.project.io.StreamKindEnum;
                    /** Name of the stream */
                    name: string;
                    /** Region where the stream will be available */
                    region: string;
                }
                /** Kind of persistence for the stream */
                export enum StreamKindEnum {
                    "NON_PERSISTENT" = "NON_PERSISTENT",
                    "PERSISTENT" = "PERSISTENT"
                }
                /** Get statistics of a stream */
                export interface StreamStats {
                    /** Number of messages per second */
                    usage: number;
                }
                /** Status of the stream */
                export enum StreamStatusEnum {
                    "ERROR" = "ERROR",
                    "INSTALLING" = "INSTALLING",
                    "RUNNING" = "RUNNING"
                }
            }
            export namespace loadbalancer {
                export namespace action {
                    /** Available status code for Redirect action */
                    export enum RedirectStatusCodeEnum {
                        "301" = "301",
                        "302" = "302",
                        "303" = "303",
                        "307" = "307",
                        "308" = "308"
                    }
                    /** Available status code for Reject action */
                    export enum RejectStatusCodeEnum {
                        "200" = "200",
                        "400" = "400",
                        "403" = "403",
                        "405" = "405",
                        "408" = "408",
                        "429" = "429",
                        "500" = "500",
                        "502" = "502",
                        "503" = "503",
                        "504" = "504"
                    }
                }
                export namespace backend {
                    /** Available load balancer backend balancer algorithm */
                    export enum BalancerAlgorithmEnum {
                        "first" = "first",
                        "leastconn" = "leastconn",
                        "roundrobin" = "roundrobin",
                        "source" = "source",
                        "static-rr" = "static-rr"
                    }
                    /** Available load balancer backend proxy-protocol */
                    export enum ProxyProtocolEnum {
                        "v1" = "v1",
                        "v2" = "v2",
                        "v2-cn" = "v2-cn",
                        "v2-ssl" = "v2-ssl"
                    }
                }
                export namespace condition {
                    /** Matching operator */
                    export enum MatchEnum {
                        "end-with" = "end-with",
                        "exists" = "exists",
                        "is" = "is",
                        "regex" = "regex",
                        "start-with" = "start-with"
                    }
                    /** Matching field */
                    export enum TypeEnum {
                        "cookie" = "cookie",
                        "header" = "header",
                        "host" = "host",
                        "method" = "method",
                        "path" = "path",
                        "query-param" = "query-param",
                        "source" = "source"
                    }
                }
                export namespace configuration {
                    export namespace networking {
                        /** Networking configuration egress definition */
                        export interface Egress {
                            /** vrack networking id */
                            id ? : string;
                            /** networking egress kind definition */
                            kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                        }
                        /** Networking configuration ingress definition */
                        export interface Ingress {
                            /** networking configuration ingress kind definition */
                            kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                        }
                        /** Networking configuration object */
                        export interface Networking {
                            /** Networking configuration definition for egress */
                            egress ? : cloud.project.loadbalancer.configuration.networking.Egress;
                            /** Networking configuration definition for ingress */
                            ingress ? : cloud.project.loadbalancer.configuration.networking.Ingress;
                        }
                    }
                }
                export namespace frontend {
                    /** Available load balancer frontend mode */
                    export enum ModeEnum {
                        "TCP" = "TCP"
                    }
                }
                export namespace networking {
                    export namespace egress {
                        /** Networking kind */
                        export enum KindEnum {
                            "public" = "public",
                            "vrack" = "vrack"
                        }
                    }
                    export namespace ingress {
                        /** Networking kind */
                        export enum KindEnum {
                            "public" = "public"
                        }
                    } /** Networking Egress definition */
                    export interface Egress {
                        /** vrack networking id */
                        id ? : string;
                        /** networking egress kind definition */
                        kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                    }
                    /** Networking Egress definition */
                    export interface EgressCreation {
                        /** networking egress kind definition */
                        kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                    }
                    /** Networking Ingress definition */
                    export interface Ingress {
                        /** networking ingress kind definition */
                        kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                    }
                    /** Networking Ingress definition */
                    export interface IngressCreation {
                        /** networking ingress kind definition */
                        kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                    }
                    /** Networking object */
                    export interface Networking {
                        /** Networking definition for egress */
                        egress: cloud.project.loadbalancer.networking.Egress;
                        /** Networking definition for ingress */
                        ingress: cloud.project.loadbalancer.networking.Ingress;
                    }
                    /** Networking creation object */
                    export interface NetworkingCreation {
                        /** Networking definition for egress */
                        egress ? : cloud.project.loadbalancer.networking.EgressCreation;
                        /** Networking definition for ingress */
                        ingress ? : cloud.project.loadbalancer.networking.IngressCreation;
                    }
                }
                export namespace stats {
                    export namespace target {
                        export namespace server {
                            /** Status of target's server */
                            export enum StatusEnum {
                                "ERROR" = "ERROR",
                                "HEALTHY" = "HEALTHY",
                                "INIT" = "INIT",
                                "L4_CONNECTION_ERROR" = "L4_CONNECTION_ERROR",
                                "L4_TIMEOUT_ERROR" = "L4_TIMEOUT_ERROR",
                                "L7_PROTOCOL_ERROR" = "L7_PROTOCOL_ERROR",
                                "L7_RESPONSE_ERROR" = "L7_RESPONSE_ERROR",
                                "L7_TIMEOUT" = "L7_TIMEOUT",
                                "UNKNOWN" = "UNKNOWN"
                            }
                        } /** Loadbalancer target server stats */
                        export interface Server {
                            /** Target name */
                            name: string;
                            /** Server status */
                            status: cloud.project.loadbalancer.stats.target.server.StatusEnum;
                        }
                    } /** Status of availability of loadbalancer */
                    export enum StatusEnum {
                        "HEALTHY" = "HEALTHY",
                        "NOT_AVAILABLE" = "NOT_AVAILABLE"
                    }
                    /** Loadbalancer target stats */
                    export interface Target {
                        /** Target name */
                        name: string;
                        /** Concurrent connections */
                        servers: cloud.project.loadbalancer.stats.target.Server[];
                    }
                    /** Loadbalancer bandwidth stats */
                    export interface Throughput {
                        /** Consumed inbound bandwidth (bytes/s) */
                        in: number;
                        /** Consumed outbound bandwidth (bytes/s) */
                        out: number;
                    }
                }
                export namespace target {
                    /** Available load balancer target balancer algorithm */
                    export enum BalancerAlgorithmEnum {
                        "first" = "first",
                        "leastconn" = "leastconn",
                        "roundrobin" = "roundrobin",
                        "source" = "source",
                        "static-rr" = "static-rr"
                    }
                    /** Available load balancer target proxy-protocol */
                    export enum ProxyProtocolEnum {
                        "v1" = "v1",
                        "v2" = "v2",
                        "v2-cn" = "v2-cn",
                        "v2-ssl" = "v2-ssl"
                    }
                } /** HTTP load balancer dispatch action */
                export interface ActionDispatch {
                    /** The backend name */
                    name: string;
                    /** Target name */
                    target: string;
                }
                /** HTTP load balancer redirect action */
                export interface ActionRedirect {
                    /** Location url */
                    location: string;
                    /** The backend name */
                    name: string;
                    /** StatusCode for redirect action */
                    statusCode: cloud.project.loadbalancer.action.RedirectStatusCodeEnum;
                }
                /** HTTP load balancer reject action */
                export interface ActionReject {
                    /** The action name */
                    name: string;
                    /** StatusCode for reject action */
                    statusCode: cloud.project.loadbalancer.action.RejectStatusCodeEnum;
                }
                /** HTTP load balancer rewrite action */
                export interface ActionRewrite {
                    /** Location url */
                    location: string;
                    /** The backend name */
                    name: string;
                }
                /** HTTP load balancer actions */
                export interface Actions {
                    /** List of dispatch actions */
                    dispatch ? : cloud.project.loadbalancer.ActionDispatch[];
                    /** List of redirect actions */
                    redirect ? : cloud.project.loadbalancer.ActionRedirect[];
                    /** List of reject actions */
                    reject ? : cloud.project.loadbalancer.ActionReject[];
                    /** List of rewrite actions */
                    rewrite ? : cloud.project.loadbalancer.ActionRewrite[];
                }
                /** Address to reach the load balancer */
                export interface Address {
                    /** IP version 4 */
                    ipv4: string;
                    /** IP version 6 */
                    ipv6 ? : ipv6;
                }
                /** IP list split in version 4 and 6 */
                export interface Addresses {
                    /** IP version 4 list */
                    ipv4: string[];
                    /** IP version 6 list */
                    ipv6 ? : ipv6Block[];
                }
                /** An application load balancer configuration */
                export interface ApplicationConfiguration {
                    /** All actions */
                    actions ? : cloud.project.loadbalancer.Actions;
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of conditions */
                    conditions ? : cloud.project.loadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.loadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** An application load balancer configuration */
                export interface ApplicationConfigurationCreation {
                    /** All actions */
                    actions ? : cloud.project.loadbalancer.Actions;
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of conditions */
                    conditions ? : cloud.project.loadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.loadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** Application load balancer size capability */
                export interface ApplicationLoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Number of requests allowed per second */
                    requestsPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
                /** A load balancer backend */
                export interface Backend {
                    /** Use a specific balancer algorithm */
                    balancer ? : cloud.project.loadbalancer.backend.BalancerAlgorithmEnum;
                    /** The backend name */
                    name: string;
                    /** Use proxy protocol on backend */
                    proxyProtocol ? : cloud.project.loadbalancer.backend.ProxyProtocolEnum;
                    /** List of server in backend */
                    servers: cloud.project.loadbalancer.Server[];
                    /** Enable sticky session, only usable with http-mode frontends */
                    sticky ? : boolean;
                }
                /** Select a load balancer backend */
                export interface BackendSelector {
                    /** The backend name */
                    name: string;
                }
                /** A condition */
                export interface Condition {
                    /** The condition name */
                    key ? : string;
                    /** Criterion matching operation */
                    match: cloud.project.loadbalancer.condition.MatchEnum;
                    /** The condition name */
                    name: string;
                    /** Negate the condition */
                    negate ? : boolean;
                    /** Criterion used to chose the appropriate action */
                    type: cloud.project.loadbalancer.condition.TypeEnum;
                    /** The list of values to match */
                    values: string[];
                }
                /** A load balancer configuration */
                export interface Configuration {
                    /** List of backends */
                    backends: cloud.project.loadbalancer.Backend[];
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of frontends */
                    frontends: cloud.project.loadbalancer.Frontend[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A load balancer configuration */
                export interface ConfigurationCreation {
                    /** List of backends */
                    backends: cloud.project.loadbalancer.Backend[];
                    /** List of certificate ID */
                    certificates: string[];
                    /** List of frontends */
                    frontends: cloud.project.loadbalancer.Frontend[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** Information about version of the configuration */
                export interface ConfigurationVersion {
                    /** Applied version of the configuration */
                    applied: number;
                    /** Latest version of the configuration */
                    latest: number;
                }
                /** A load balancer entryPoint */
                export interface EntryPoint {
                    /** The default target name */
                    defaultTarget ? : string;
                    /** Disable HTTP2 */
                    disableH2 ? : boolean;
                    /** The frontend name */
                    name: string;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** List of rules */
                    rules: cloud.project.loadbalancer.Rule[];
                    /** tls */
                    tls: boolean;
                }
                /** A load balancer frontend */
                export interface Frontend {
                    /** Selector for backend */
                    backends: cloud.project.loadbalancer.BackendSelector[];
                    /** Load balancing mode */
                    mode ? : cloud.project.loadbalancer.frontend.ModeEnum;
                    /** The frontend name */
                    name: string;
                    /** Port to listen (deprecated: see ports) */
                    port ? : number;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** tls */
                    tls: boolean;
                    /** IP range to whitelist */
                    whitelist: string[];
                }
                /** Network load balancer size capability */
                export interface LoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Number of new connection allowed per second */
                    newConnectionPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
                /** A port range */
                export interface PortRange {
                    /** Port range end */
                    end: number;
                    /** Port range start */
                    start: number;
                }
                /** Region information */
                export interface Region {
                    /** Region name */
                    region: string;
                }
                /** A entrypoint rule */
                export interface Rule {
                    /** The action name */
                    action: string;
                    /** The list of condition to match */
                    conditions ? : string[];
                }
                /** A load balancer backend server */
                export interface Server {
                    /** IP address of a server */
                    ip: string;
                    /** Server name */
                    name: string;
                    /** Disable health check */
                    noCheck ? : boolean;
                    /** Port that the server listen */
                    port: number;
                    /** Weight of the server in the backend */
                    weight ? : number;
                }
                /** Size of the load balancer */
                export enum SizeEnum {
                    "L" = "L",
                    "M" = "M",
                    "S" = "S"
                }
                /** Loadbalancer stats */
                export interface Stats {
                    /** Concurrent connections */
                    concurrentFlows: number;
                    /** HTTP requests made */
                    httpRequestsPerSecond ? : number;
                    /** Main loadbalancer status */
                    status: cloud.project.loadbalancer.stats.StatusEnum;
                    /** Targets state */
                    targets: cloud.project.loadbalancer.stats.Target[];
                    /** New connections opened per second */
                    tcpConnectionsPerSecond: number;
                    /** Throughput consumed on the entrypoints */
                    throughput: cloud.project.loadbalancer.stats.Throughput;
                }
                /** Status of a load balancer */
                export enum StatusEnum {
                    "APPLYING" = "APPLYING",
                    "CREATED" = "CREATED",
                    "DELETING" = "DELETING",
                    "ERROR" = "ERROR",
                    "FROZEN" = "FROZEN",
                    "RUNNING" = "RUNNING"
                }
                /** A load balancer target */
                export interface Target {
                    /** Use a specific balancer algorithm */
                    balancer ? : cloud.project.loadbalancer.target.BalancerAlgorithmEnum;
                    /** The backend name */
                    name: string;
                    /** Use proxy protocol on target */
                    proxyProtocol ? : cloud.project.loadbalancer.target.ProxyProtocolEnum;
                    /** List of server in target */
                    servers: cloud.project.loadbalancer.Server[];
                    /** Enable sticky session, only usable with http-mode frontends */
                    sticky ? : boolean;
                }
            }
            export namespace networkloadbalancer {
                export namespace action {
                    /** Available type of Reject action */
                    export enum RejectTypeEnum {
                        "deny" = "deny",
                        "drop" = "drop"
                    }
                }
                export namespace condition {
                    /** Matching field */
                    export enum TypeEnum {
                        "source" = "source"
                    }
                } /** network load balancer reject action */
                export interface ActionReject {
                    /** The action name */
                    name: string;
                    /** type of reject action */
                    type: cloud.project.networkloadbalancer.action.RejectTypeEnum;
                }
                /** Network Loadbalancer action */
                export interface Actions {
                    /** List of dispatch actions */
                    dispatch ? : cloud.project.loadbalancer.ActionDispatch[];
                    /** List of reject actions */
                    reject ? : cloud.project.networkloadbalancer.ActionReject[];
                }
                /** A condition */
                export interface Condition {
                    /** The condition name */
                    key ? : string;
                    /** Criterion matching operation */
                    match: cloud.project.loadbalancer.condition.MatchEnum;
                    /** The condition name */
                    name: string;
                    /** Negate the condition */
                    negate ? : boolean;
                    /** Criterion used to chose the appropriate action */
                    type: cloud.project.networkloadbalancer.condition.TypeEnum;
                    /** The list of values to match */
                    values: string[];
                }
                /** A network load balancer configuration */
                export interface Configuration {
                    /** All actions */
                    actions ? : cloud.project.networkloadbalancer.Actions;
                    /** List of conditions */
                    conditions ? : cloud.project.networkloadbalancer.Condition[];
                    /** List of entryPoints */
                    entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking: cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A network load balancer configuration */
                export interface ConfigurationCreation {
                    /** All actions */
                    actions ? : cloud.project.networkloadbalancer.Actions;
                    /** List of conditions */
                    conditions ? : cloud.project.networkloadbalancer.Condition[];
                    /** List of entryPointss */
                    entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                    /** networking configuration */
                    networking ? : cloud.project.loadbalancer.configuration.networking.Networking;
                    /** List of targets */
                    targets ? : cloud.project.loadbalancer.Target[];
                    /** Identifier and version of the configuration */
                    version: number;
                }
                /** A network load balancer entryPoint */
                export interface EntryPoint {
                    /** The default target name */
                    defaultTarget ? : string;
                    /** The frontend name */
                    name: string;
                    /** Port ranges to listen */
                    portRanges ? : cloud.project.loadbalancer.PortRange[];
                    /** Ports to listen */
                    ports ? : number[];
                    /** List of rules */
                    rules: cloud.project.loadbalancer.Rule[];
                }
                /** Network load balancer size capability */
                export interface LoadBalancerSizeCapability {
                    /** Bandwidth allowed in Mb/s */
                    bandwidth: number;
                    /** Maximum connection allowed on the load balancer */
                    maximumConnection: number;
                    /** Maximum number of connections opened per second */
                    newConnectionPerSecond: number;
                    /** Size of the load balancer */
                    size: cloud.project.loadbalancer.SizeEnum;
                }
            } /** AllocationPool */
            export interface AllocationPool {
                /** Last IP for the pool (eg: 192.168.1.24) */
                end: string;
                /** First IP for the pool (eg: 192.168.1.12) */
                start: string;
            }
            /** A load balancer to handle application workload */
            export interface ApplicationLoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A load balancer to handle application workload */
            export interface ApplicationLoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Usage information for current month on your project */
            export interface BandwidthStorageUsage {
                /** Downloaded bytes from your containers */
                downloadedBytes: number;
                /** Region */
                region: string;
                /** Cost for your storage bandwidth */
                total: order.Price;
            }
            /** Project bill */
            export interface Bill {
                /** Bill id */
                billId: string;
                /** Bill type */
                type: cloud.project.BillTypeEnum;
            }
            /** Possible values for bill type */
            export enum BillTypeEnum {
                "creditPurchased" = "creditPurchased",
                "monthlyConsumption" = "monthlyConsumption",
                "monthlyInstanceActivation" = "monthlyInstanceActivation"
            }
            /** A Certificate to use in your NFVs */
            export interface Certificate {
                /** Date after when the certificate is not valid */
                expireAt: string;
                /** Fingerprint of the cert (prefixed by hashing algorithm used) */
                fingerprint: string;
                /** Unique ID of the certificate */
                id: string;
                /** Issue of the certificate (extract from certificate) */
                issuer: string;
                /** Kind of certificate */
                kind: cloud.project.CertificateKindEnum;
                /** Name of the certificate */
                name: string;
                /** Serial number of the certificate (extract from certificate) */
                serialNumber: string;
                /** List of SANs (extract from certificate) */
                serverAlternativeNames: cloud.project.certificate.ServerAlternativeName[];
                /** Certificate status, to quickly know it can safely be used */
                status: cloud.project.CertificateStatusEnum;
                /** Subject of the certificate (extract from certificate) */
                subject: string;
                /** Date after when the certificate is valid */
                validAt: string;
                /** Version of certificate (incremented every time you push a new certificate with the same name) */
                version: number;
            }
            /** Add a new certificate */
            export interface CertificateAdd {
                /** Import an existing certificate */
                import ? : cloud.project.certificate.Import;
                /** Name of the certificate */
                name: string;
            }
            /** Certificate kind */
            export enum CertificateKindEnum {
                "IMPORTED" = "IMPORTED"
            }
            /** Certificate status */
            export enum CertificateStatusEnum {
                "EXPIRED" = "EXPIRED",
                "NOT_YET_VALID" = "NOT_YET_VALID",
                "OK" = "OK",
                "REVOKED" = "REVOKED"
            }
            /** Usage information for current month on your project */
            export interface CurrentUsage {
                /** Instances usage */
                instances: cloud.project.InstancesUsage;
                /** Snapshots usage */
                snapshots: cloud.project.SnapshotsUsage;
                /** Storage usage */
                storage: cloud.project.StorageUsage;
                /** Total cost for the project */
                total: order.Price;
                /** Snapshots usage */
                volumeSnapshots: cloud.project.SnapshotsUsage;
                /** Volumes usage */
                volumes: cloud.project.VolumesUsage;
            }
            /** Possible eligibility actions */
            export enum EligibilityAction {
                "addPaymentMethod" = "addPaymentMethod",
                "askIncreaseProjectsQuota" = "askIncreaseProjectsQuota",
                "challengePaymentMethod" = "challengePaymentMethod",
                "verifyPaypal" = "verifyPaypal"
            }
            /** Eligibility information */
            export interface EligibilityInfo {
                /** Actions to perform to be eligible */
                actionsRequired ? : cloud.project.EligibilityAction[];
                /** Cloud project order */
                minimumCredit ? : order.Price;
                /** Payment method accepted to order Public Cloud project */
                paymentMethodsAuthorized ? : cloud.project.PaymentMethodAuthorized[];
                /** Information about voucher code */
                voucher ? : cloud.project.NewProjectInfoVoucher;
            }
            /** A floating ip */
            export interface FloatingIp {
                /** Associated entity with the floating ip */
                associatedEntity ? : cloud.project.floatingIp.AssociatedEntity;
                /** ID of the floating ip */
                id: string;
                /** Value of the floating ip */
                ip: string;
                /** ID of the network */
                networkId: string;
                /** Floating ip region */
                region ? : string;
                /** Status of the floating ip */
                status: cloud.project.floatingIp.StatusEnum;
            }
            /** Instance monthly billing details */
            export interface InstanceMonthlyBilling {
                /** Monthly billing activation date */
                activatedOn: string;
                /** Cost */
                cost: order.Price;
            }
            /** Instance usage */
            export interface InstanceUsageDetail {
                /** Hourly price */
                hourly ? : order.Price;
                /** Instance id */
                instanceId: string;
                /** Monthly price */
                monthly ? : cloud.project.InstanceMonthlyBilling;
                /** Is monthly billing enabled */
                monthlyBilling: boolean;
                /** Reference */
                reference: string;
            }
            /** Instances usage for current month */
            export interface InstancesUsage {
                /** Instance usage details */
                detail: cloud.project.InstanceUsageDetail[];
                /** Total cost for the instances */
                total: order.Price;
            }
            /** A load balancer to handle workload */
            export interface LoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking: cloud.project.loadbalancer.networking.Networking;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A load balancer to handle workload */
            export interface LoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Network */
            export interface Network {
                /** Network id */
                id: string;
                /** Network name */
                name: string;
                /** Network region */
                region ? : string;
                /** Network visibility */
                visibility: cloud.network.NetworkVisibilityEnum;
                /** Network VLAN id */
                vlanId ? : number;
            }
            /** A network load balancer for TCP/UDP workloads */
            export interface NetworkLoadBalancer {
                /** Address to reach the load balancer */
                address: cloud.project.loadbalancer.Address;
                /** Information about version of the configuration */
                configuration: cloud.project.loadbalancer.ConfigurationVersion;
                /** Creation date and time of the load balancer */
                createdAt: string;
                /** Description of the load balancer */
                description ? : string;
                /** IPs used by the load balancer to contact backend's servers */
                egressAddress: cloud.project.loadbalancer.Addresses;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Openstack region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size: cloud.project.loadbalancer.SizeEnum;
                /** Status of a load balancer */
                status: cloud.project.loadbalancer.StatusEnum;
            }
            /** A network load balancer for TCP/UDP workloads */
            export interface NetworkLoadBalancerCreation {
                /** Description of the load balancer */
                description ? : string;
                /** ID of the load balancer */
                id: string;
                /** Name of the load balancer */
                name ? : string;
                /** Networking definition */
                networking ? : cloud.project.loadbalancer.networking.NetworkingCreation;
                /** Openstack Region where the load balancer is hosted */
                openstackRegion: string;
                /** Region where the load balancer is hosted */
                region: string;
                /** Size of the load balancer */
                size ? : cloud.project.loadbalancer.SizeEnum;
            }
            /** Information about voucher */
            export interface NewProjectInfoVoucher {
                /** Credit added thanks to the voucher */
                credit: order.Price;
                /** A valid registered payment method is required to use the voucher */
                paymentMethodRequired: boolean;
            }
            /** List of accepted payment methods */
            export enum PaymentMethodAuthorized {
                "bankAccount" = "bankAccount",
                "credit" = "credit",
                "creditCard" = "creditCard",
                "paypal" = "paypal",
                "sepaDirectDebit" = "sepaDirectDebit"
            }
            /** Product agreements */
            export interface ProductAgreements {
                /** Agreements to validate */
                agreementsToValidate ? : number[];
                /** Agreements already validated */
                agreementsValidated ? : number[];
            }
            /** Possible values for cloud project product name */
            export enum ProductNameEnum {
                "registry" = "registry"
            }
            /** Possible values for project status */
            export enum ProjectStatus {
                "creating" = "creating",
                "deleted" = "deleted",
                "deleting" = "deleting",
                "ok" = "ok",
                "suspended" = "suspended"
            }
            /** Possible values for project status */
            export enum ProjectStatusEnum {
                "creating" = "creating",
                "deleted" = "deleted",
                "deleting" = "deleting",
                "ok" = "ok",
                "suspended" = "suspended"
            }
            /** Usage information on your project */
            export interface ProjectUsage {
                /** Current usage details */
                current: cloud.project.CurrentUsage;
            }
            /** Snapshot usage */
            export interface SnapshotUsageDetail {
                /** Snapshot price */
                price: order.Price;
                /** Snapshot region */
                region: string;
                /** Stored snapshot size in gigabytes */
                storedSize: complexType.UnitAndValue < double > ;
            }
            /** Snapshots usage for current month */
            export interface SnapshotsUsage {
                /** Snapshots usage details */
                detail: cloud.project.SnapshotUsageDetail[];
                /** Total cost for the snapshots */
                total: order.Price;
            }
            /** Usage information for current month on your project */
            export interface StorageUsage {
                /** Storage bandwidth usage */
                bandwidth: cloud.project.BandwidthStorageUsage[];
                /** Cost for your storage in all your containers */
                total: order.Price;
                /** Storage volume usage */
                volume: cloud.project.StorageVolumeUsage[];
            }
            /** Storage volume used on your project */
            export interface StorageVolumeUsage {
                /** Region */
                region: string;
                /** Bytes stored in your containers */
                storedBytes: number;
                /** Cost for your storage bandwidth */
                total: order.Price;
            }
            /** Subnet */
            export interface Subnet {
                /** List of ip pools allocated in subnet */
                allocationPools: cloud.project.AllocationPool[];
                /** Subnet CIDR */
                cidr: string;
                /** If DHCP is enabled on subnet */
                dhcpEnabled: boolean;
                /** Gateway IP */
                gatewayIp ? : string;
                /** Subnet id */
                id: string;
                /** IP Version (4 or 6) */
                ipVersion: number;
                /** Subnet name */
                name: string;
            }
            /** Possible values for volume type */
            export enum VolumeType {
                "classic" = "classic",
                "high-speed" = "high-speed"
            }
            /** Volume usage */
            export interface VolumeUsageDetail {
                /** Volume price */
                price: order.Price;
                /** Volume capacity in gigabytes */
                volumeCapacity: complexType.UnitAndValue < long > ;
                /** Volume id */
                volumeId: string;
                /** Volume type */
                volumeType: cloud.project.VolumeType;
            }
            /** Volumes usage for current month */
            export interface VolumesUsage {
                /** Volume usage details */
                detail: cloud.project.VolumeUsageDetail[];
                /** Total cost for the volumes */
                total: order.Price;
            }
        }
        export namespace quota {
            export namespace storage {
                /** Cloud Storage Quota */
                export interface Quota {
                    /** Quota used in bytes */
                    bytesUsed: number;
                    /** Number of containers on account */
                    containerCount: number;
                    /** Number of objects on account */
                    objectCount: number;
                    /** Quota in bytes */
                    quotaBytes ? : number;
                }
                /** Update storage quota */
                export interface QuotaUpdate {
                    /** New quota in bytes */
                    quotaBytes: number;
                }
            } /** Quotas */
            export interface AllowedQuota {
                /** Quotas for compute */
                compute: cloud.quota.ComputeQuota;
                /** Name */
                name: string;
                /** Quotas for network */
                network: cloud.quota.NetworkQuota;
                /** Quotas for volume */
                volume: cloud.quota.VolumeQuota;
            }
            /** Quotas for compute */
            export interface ComputeQuota {
                /** Maximum total cores allowed in your project */
                cores: number;
                /** Maximum number of instances allowed in your project */
                instances: number;
                /** Maximum total ram allowed in your project */
                ram: number;
            }
            /** Quotas on instances */
            export interface InstanceUsageQuotas {
                /** Maximum total cores allowed in your project */
                maxCores: number;
                /** Maximum total cores allowed in your project */
                maxInstances: number;
                /** maxRam */
                maxRam: number;
                /** Current used cores number */
                usedCores: number;
                /** Current used instances */
                usedInstances: number;
                /** Current used ram */
                usedRAM: number;
            }
            /** Quotas on keymanager */
            export interface KeymanagerQuotas {
                /** Maximum number of secrets allowed in your project */
                maxSecrets: number;
                /** Current number of used secrets */
                usedSecrets: number;
            }
            /** Quotas on keypairs */
            export interface KeypairQuotas {
                /** Maximum keypairs count allowed in your project */
                maxCount: number;
            }
            /** Quotas on loadbalancer */
            export interface LoadbalancerQuotas {
                /** Maximum number of loadbalancers allowed in your project */
                maxLoadbalancers: number;
                /** Current number of used loadbalancers */
                usedLoadbalancers: number;
            }
            /** Quotas for network */
            export interface NetworkQuota {
                /** Maximum number of networks allowed in your project */
                networks: number;
                /** Maximum number of ports allowed in your project */
                ports: number;
                /** Maximum number of subnets allowed in your project */
                subnets: number;
            }
            /** Quotas on network */
            export interface NetworkQuotas {
                /** Maximum number of floating ips allowed in your project */
                maxFloatingIPs: number;
                /** Maximum number of gateways allowed in your project */
                maxGateways: number;
                /** Maximum networks allowed in your project */
                maxNetworks: number;
                /** Maximum subnets allowed in your project */
                maxSubnets: number;
                /** Current number of used floating ips */
                usedFloatingIPs: number;
                /** Current number of used gateways */
                usedGateways: number;
                /** Current used networks */
                usedNetworks: number;
                /** Current used subnets */
                usedSubnets: number;
            }
            /** Quotas */
            export interface Quotas {
                /** Quotas on instances */
                instance ? : cloud.quota.InstanceUsageQuotas;
                /** Quotas on keymanager */
                keymanager ? : cloud.quota.KeymanagerQuotas;
                /** Quotas on keypairs */
                keypair ? : cloud.quota.KeypairQuotas;
                /** Quotas on loadbalancer */
                loadbalancer ? : cloud.quota.LoadbalancerQuotas;
                /** Quotas on network */
                network ? : cloud.quota.NetworkQuotas;
                /** Region */
                region: string;
                /** Quotas on volumes */
                volume ? : cloud.quota.VolumeUsageQuotas;
            }
            /** Quotas for volume */
            export interface VolumeQuota {
                /** Maximum total volume capacity allowed in your project */
                gigabytes: number;
                /** Maximum number of snapshots allowed in your project */
                snapshots: number;
                /** Maximum number of volumes allowed in your project */
                volumes: number;
            }
            /** Quotas on volumes */
            export interface VolumeUsageQuotas {
                /** Maximum total volume backup capacity allowed in your project */
                maxBackupGigabytes: number;
                /** Maximum total volume capacity allowed in your project */
                maxGigabytes: number;
                /** Maximum volumes backup count */
                maxVolumeBackupCount: number;
                /** Maximum volumes count */
                maxVolumeCount: number;
                /** Current used volume backup gigabytes */
                usedBackupGigabytes: number;
                /** Current used volume gigabytes */
                usedGigabytes: number;
                /** Current volumes backup count */
                volumeBackupCount: number;
                /** Current volumes count */
                volumeCount: number;
            }
        }
        export namespace role {
            /** Role permissions */
            export interface Permission {
                /** Permission label */
                label: string;
                /** Roles having this permission */
                roles: string[];
            }
            /** Role */
            export interface Role {
                /** Role Description */
                description: string;
                /** Role id */
                id: string;
                /** Role Name */
                name: string;
                /** Permissions granted by this role */
                permissions: string[];
            }
            /** OpenStack role */
            export interface Roles {
                /** OpenStack roles */
                roles: cloud.role.Role[];
                /** OpenStack services */
                services: cloud.role.Service[];
            }
            /** OpenStack service */
            export interface Service {
                /** Name of the service */
                name: string;
                /** List of permissions */
                permissions: cloud.role.Permission[];
            }
        }
        export namespace sshkey {
            /** SshKey */
            export interface SshKey {
                /** SSH key id */
                id: string;
                /** SSH key name */
                name: string;
                /** SSH public key */
                publicKey: string;
                /** SSH key regions */
                regions: string[];
            }
            /** SshKeyDetail */
            export interface SshKeyDetail {
                /** SSH key fingerprint */
                fingerPrint: string;
                /** SSH key id */
                id: string;
                /** SSH key name */
                name: string;
                /** SSH public key */
                publicKey: string;
                /** SSH key regions */
                regions: string[];
            }
        }
        export namespace stack {
            /** Content */
            export interface Content {
                /** Content */
                content: string;
                /** Type of the content */
                type: string;
            }
            /** InstructionGuide */
            export interface InstructionGuide {
                /** Guide introduction content */
                content: cloud.stack.Content[];
                /** Guide language */
                language: string;
                /** Sections of the guide */
                sections: cloud.stack.Section[];
                /** Guide title */
                title: string;
            }
            /** Section */
            export interface Section {
                /** Content of the guide section */
                content: cloud.stack.Content[];
                /** Steps to follow */
                steps: cloud.stack.Step[];
                /** Title of the guide section */
                title: string;
            }
            /** Stack */
            export interface Stack {
                /** Stack last commit */
                commit: string;
                /** Stack description */
                description: string;
                /** GIT repository */
                gitRepository: string;
                /** Instructions to start the stack */
                instructions: cloud.stack.InstructionGuide[];
                /** Stack name */
                name: string;
                /** Stack release tag */
                release: string;
                /** Stack uuid */
                uuid: string;
            }
            /** Step */
            export interface Step {
                /** Content of the step */
                content: cloud.stack.Content[];
                /** Title of the step */
                title: string;
            }
        }
        export namespace storage {
            /** Add storage policy for container */
            export interface AddContainerPolicy {
                /** Container object key */
                objectKey: string;
                /** Policy role */
                roleName: cloud.storage.PolicyRoleEnum;
            }
            /** Container */
            export interface Container {
                /** Whether this is an archive container or not */
                archive ? : boolean;
                /** Container type */
                containerType ? : cloud.storage.TypeEnum;
                /** Storage id */
                id: string;
                /** Storage name */
                name: string;
                /** region */
                region: string;
                /** Total bytes stored */
                storedBytes: number;
                /** Total objects stored */
                storedObjects: number;
            }
            /** ContainerAccess */
            export interface ContainerAccess {
                /** Storage access endpoints */
                endpoints: cloud.storage.Endpoint[];
                /** Storage access token */
                token: string;
            }
            /** ContainerDetail */
            export interface ContainerDetail {
                /** Whether this is an archive container or not */
                archive: boolean;
                /** Container type */
                containerType: cloud.storage.TypeEnum;
                /** Origins allowed to make Cross Origin Requests */
                cors: string[];
                /** Container name */
                name: string;
                /** Objects stored in container */
                objects: cloud.storage.ContainerObject[];
                /** Public container (DEPRECATED: see containerType) */
                public: boolean;
                /** Container region */
                region: string;
                /** Container static URL */
                staticUrl: string;
                /** Total bytes stored */
                storedBytes: number;
                /** Total objects stored */
                storedObjects: number;
            }
            /** ContainerObject */
            export interface ContainerObject {
                /** Object content type */
                contentType: string;
                /** Last modification date */
                lastModified: string;
                /** Object name */
                name: string;
                /** Object retrieval delay (when unsealing) */
                retrievalDelay: number;
                /** Object retrieval state */
                retrievalState: cloud.storage.RetrievalStateEnum;
                /** Object size */
                size: number;
            }
            /** ContainerObjectTempURL */
            export interface ContainerObjectTempURL {
                /** Temporary URL expiration date */
                expirationDate: string;
                /** Temporary URL to get object */
                getURL: string;
            }
            /** Endpoint */
            export interface Endpoint {
                /** Endpoint region */
                region: string;
                /** Endpoint URL */
                url: string;
            }
            /** Raw storage policy */
            export interface PolicyRaw {
                /** Raw storage policy */
                policy: string;
            }
            /** Storage policy role */
            export enum PolicyRoleEnum {
                "admin" = "admin",
                "deny" = "deny",
                "readOnly" = "readOnly",
                "readWrite" = "readWrite"
            }
            /** Presigned URL */
            export interface PresignedURL {
                /** Presigned URL method */
                method: cloud.storage.PresignedURLMethodEnum;
                /** Presigned URL */
                url: string;
            }
            /** Inputs to generate a presigned URL */
            export interface PresignedURLInput {
                /** URL expiration in seconds */
                expire: number;
                /** Presigned URL method */
                method: cloud.storage.PresignedURLMethodEnum;
                /** Object name */
                object: string;
            }
            /** Presigned URL method */
            export enum PresignedURLMethodEnum {
                "GET" = "GET",
                "PUT" = "PUT"
            }
            /** Cloud Storage Quota */
            export interface Quota {
                /** Current number of buckets */
                buckets: number;
                /** Maximum number of buckets */
                maxBuckets: number;
            }
            /** RetrievalStateEnum */
            export enum RetrievalStateEnum {
                "sealed" = "sealed",
                "unsealed" = "unsealed",
                "unsealing" = "unsealing"
            }
            /** RightEnum */
            export enum RightEnum {
                "all" = "all",
                "read" = "read",
                "write" = "write"
            }
            /** TypeEnum */
            export enum TypeEnum {
                "private" = "private",
                "public" = "public",
                "static" = "static"
            }
        }
        export namespace usage {
            /** PaymentTypeEnum */
            export enum PaymentTypeEnum {
                "post" = "post",
                "pre" = "pre"
            }
            /** Period */
            export interface Period {
                /** Usage from */
                from: string;
                /** Usage to */
                to: string;
            }
            /** UsageBill */
            export interface UsageBill {
                /** ID of the bill */
                bill_id: string;
                /** Amount of credits used in this bill (not necessarily on part) */
                credit: number;
                /** Amount of the bill that accounts for services for the usage period, credits not taken into account */
                part: number;
                /** Payment type */
                payment_type: cloud.usage.PaymentTypeEnum;
                /** Total amount of the bill, credits not taken into account */
                total: number;
            }
            /** UsageCurrent */
            export interface UsageCurrent {
                /** Hourly usage */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly usage */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
            }
            /** UsageCurrentBills */
            export interface UsageCurrentBills {
                /** Bills related to the current usage */
                bills: cloud.usage.UsageBill[];
            }
            /** UsageForecast */
            export interface UsageForecast {
                /** Hourly forecast */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly forecast */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Forecast dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage forecast (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
                /** Usable credit to pay next bill */
                usableCredits ? : cloud.billingView.UsedCredits;
            }
            /** UsageHistory */
            export interface UsageHistory {
                /** Usage id */
                id: string;
                /** Entry last update */
                lastUpdate: string;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
            }
            /** UsageHistoryDetail */
            export interface UsageHistoryDetail {
                /** Hourly usage */
                hourlyUsage ? : cloud.billingView.HourlyResources;
                /** Usage id */
                id: string;
                /** Entry last update */
                lastUpdate: string;
                /** Monthly usage */
                monthlyUsage ? : cloud.billingView.MonthlyResources;
                /** Usage dates (from/to) */
                period: cloud.usage.Period;
                /** Resource usage (billed per hour/minute/second/unit) */
                resourcesUsage ? : cloud.billingView.TypedResources[];
            }
            /** UsageHistoryDetailBills */
            export interface UsageHistoryDetailBills {
                /** Bills related to the usage */
                bills: cloud.usage.UsageBill[];
            }
        }
        export namespace user {
            /** Client Cloud Configuration */
            export interface Configuration {
                /** Client configuration */
                content: string;
            }
            /** Openrc */
            export interface Openrc {
                /** openrc file */
                content: string;
            }
            /** OpenrcVersionEnum */
            export enum OpenrcVersionEnum {
                "v2.0" = "v2.0",
                "v3" = "v3"
            }
            /** RCloneServiceEnum */
            export enum RCloneServiceEnum {
                "storage" = "storage",
                "storage-s3" = "storage-s3"
            }
            /** Rclone */
            export interface Rclone {
                /** rclone configuration file */
                content: string;
            }
            /** RoleEnum */
            export enum RoleEnum {
                "admin" = "admin",
                "administrator" = "administrator",
                "ai_training_operator" = "ai_training_operator",
                "ai_training_read" = "ai_training_read",
                "authentication" = "authentication",
                "backup_operator" = "backup_operator",
                "compute_operator" = "compute_operator",
                "image_operator" = "image_operator",
                "infrastructure_supervisor" = "infrastructure_supervisor",
                "network_operator" = "network_operator",
                "network_security_operator" = "network_security_operator",
                "objectstore_operator" = "objectstore_operator",
                "volume_operator" = "volume_operator"
            }
            /** S3CredentialsSecretOnly */
            export interface S3CredentialsSecretOnly {
                /** S3 Access key secret */
                secret: string;
            }
            /** S3CredentialsWithSecret */
            export interface S3CredentialsWithSecret {
                /** S3 Access key */
                access: string;
                /** S3 Access key secret */
                secret: string;
                /** Tenant id */
                tenantId: string;
                /** User id */
                userId: string;
            }
            /** User */
            export interface User {
                /** User creation date */
                creationDate: string;
                /** User description */
                description: string;
                /** User id */
                id: number;
                /** User id on openstack */
                openstackId ? : string;
                /** User roles */
                roles: cloud.role.Role[];
                /** User status */
                status: cloud.user.UserStatusEnum;
                /** Username */
                username: string;
            }
            /** UserDetail */
            export interface UserDetail {
                /** User creation date */
                creationDate: string;
                /** User description */
                description: string;
                /** User id */
                id: number;
                /** User id on openstack */
                openstackId ? : string;
                /** User password */
                password: string;
                /** User roles */
                roles: cloud.role.Role[];
                /** User status */
                status: cloud.user.UserStatusEnum;
                /** Username */
                username: string;
            }
            /** UserStatusEnum */
            export enum UserStatusEnum {
                "creating" = "creating",
                "deleted" = "deleted",
                "deleting" = "deleting",
                "ok" = "ok"
            }
        }
        export namespace volume {
            /** Snapshot */
            export interface Snapshot {
                /** Snapshot creation date */
                creationDate: string;
                /** Snapshot description */
                description: string;
                /** Snapshot id */
                id: string;
                /** Snapshot name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Snapshot region */
                region: string;
                /** Snapshot size */
                size: number;
                /** Snapshot status */
                status: cloud.volume.SnapshotStatusEnum;
                /** Volume source id */
                volumeId: string;
            }
            /** SnapshotStatusEnum */
            export enum SnapshotStatusEnum {
                "available" = "available",
                "creating" = "creating",
                "deleting" = "deleting",
                "error" = "error",
                "error_deleting" = "error_deleting"
            }
            /** Volume */
            export interface Volume {
                /** Volume attached to instances id */
                attachedTo: string[];
                /** Volume bootable */
                bootable: boolean;
                /** Volume creation date */
                creationDate: string;
                /** Volume description */
                description: string;
                /** Volume id */
                id: string;
                /** Volume name */
                name: string;
                /** Order plan code */
                planCode ? : string;
                /** Volume region */
                region: string;
                /** Volume size (in GB) */
                size: number;
                /** Volume status */
                status: cloud.volume.VolumeStatusEnum;
                /** Volume type */
                type: cloud.volume.VolumeTypeEnum;
            }
            /** VolumeStatusEnum */
            export enum VolumeStatusEnum {
                "attaching" = "attaching",
                "available" = "available",
                "awaiting-transfer" = "awaiting-transfer",
                "backing-up" = "backing-up",
                "creating" = "creating",
                "deleting" = "deleting",
                "detaching" = "detaching",
                "downloading" = "downloading",
                "error" = "error",
                "error_backing-up" = "error_backing-up",
                "error_deleting" = "error_deleting",
                "error_extending" = "error_extending",
                "error_restoring" = "error_restoring",
                "extending" = "extending",
                "in-use" = "in-use",
                "maintenance" = "maintenance",
                "reserved" = "reserved",
                "restoring-backup" = "restoring-backup",
                "retyping" = "retyping",
                "uploading" = "uploading"
            }
            /** VolumeTypeEnum */
            export enum VolumeTypeEnum {
                "classic" = "classic",
                "high-speed" = "high-speed",
                "high-speed-gen2" = "high-speed-gen2"
            }
        }
        export namespace volumeBackup {
            /** A volume backup */
            export interface VolumeBackup {
                /** Creation date of the backup */
                creationDate: string;
                /** Volume backup id */
                id: string;
                /** Volume backup name */
                name: string;
                /** Volume backup region */
                region: string;
                /** Size of the backup in GiB */
                size: number;
                /** Staus of the backup */
                status: cloud.volumeBackup.VolumeBackupStatusEnum;
                /** ID of the volume used to create the backup */
                volumeId: string;
            }
            /** Create a volume backup */
            export interface VolumeBackupCreation {
                /** name of the backup */
                name: string;
                /** ID of the volume to backup */
                volumeId: string;
            }
            /** Restore a volume backup on a volume */
            export interface VolumeBackupRestore {
                /** ID of the volume to restore on */
                volumeId: string;
            }
            /** VolumeBackupStatusEnum */
            export enum VolumeBackupStatusEnum {
                "creating" = "creating",
                "deleting" = "deleting",
                "error" = "error",
                "ok" = "ok",
                "restoring" = "restoring"
            }
            /** Create a volume from a volume backup */
            export interface VolumeCreationFromBackup {
                /** name of the new volume */
                name: string;
            }
        } /** Possible values for project access type */
        export enum AccessTypeEnum {
            "full" = "full",
            "restricted" = "restricted"
        }
        /** Cloud ACL */
        export interface Acl {
            /** OVH customer unique identifier */
            accountId: string;
            /** ACL type */
            type: cloud.AclTypeEnum;
        }
        /** Possible values for ACL type */
        export enum AclTypeEnum {
            "readOnly" = "readOnly",
            "readWrite" = "readWrite"
        }
        /** Cloud alerting consumption */
        export interface Alerting {
            /** Alerting creation date */
            creationDate: string;
            /** Delay between alerts in seconds */
            delay: cloud.AlertingDelayEnum;
            /** Email to contact */
            email: string;
            /** Formatted monthly threshold for this alerting */
            formattedMonthlyThreshold: order.Price;
            /** Alerting unique UUID */
            id: string;
            /** Monthly threshold for this alerting */
            monthlyThreshold: number;
        }
        /** Cloud alert on your consumption */
        export interface AlertingAlert {
            /** Alert date */
            alertDate: string;
            /** Alert id */
            alertId: number;
            /** Alert sent to */
            emails: string[];
        }
        /** Possible values for delay between two alerts in seconds */
        export enum AlertingDelayEnum {
            "10800" = "10800",
            "172800" = "172800",
            "21600" = "21600",
            "259200" = "259200",
            "3600" = "3600",
            "43200" = "43200",
            "604800" = "604800",
            "86400" = "86400"
        }
        /** Details about an available region that can be activated on your project */
        export interface AvailableRegion {
            /** Region continent code */
            continentCode: cloud.RegionContinentEnum;
            /** Location of the datacenter where the region is */
            datacenterLocation: string;
            /** Region name */
            name: string;
        }
        /** List your automated backups */
        export interface Backup {
            /** Backup name */
            backupName: string;
            /** Creation date of the workflow */
            createdAt: string;
            /** Workflow cron pattern */
            cron: string;
            /** Executions logs */
            executions ? : cloud.Execution[];
            /** Workflow id */
            id: string;
            /** Instance id */
            instanceId: string;
            /** Workflow name identifier */
            name: string;
        }
        /** Container */
        export interface ColdArchiveContainer {
            /** After restoring your archive, date when the restored files will be deleted */
            automaticDeletionAt ? : string;
            /** The date when the resource was created */
            createdAt: string;
            /** Container name */
            name: string;
            /** Container objects */
            objects: cloud.StorageObject[];
            /** Container total objects count */
            objectsCount: number;
            /** Container total objects size (bytes) */
            objectsSize: number;
            /** Container owner user ID */
            ownerId: number;
            /** ColdArchive status */
            status: cloud.ColdArchiveContainerStatusEnum;
            /** Container virtual host */
            virtualHost: string;
        }
        /** Enum values for Status */
        export enum ColdArchiveContainerStatusEnum {
            "archived" = "archived",
            "archiving" = "archiving",
            "deleting" = "deleting",
            "flushed" = "flushed",
            "none" = "none",
            "restored" = "restored",
            "restoring" = "restoring"
        }
        /** Information about the different components available in the region */
        export interface Component {
            /** Endpoint URL */
            endpoint: string;
            /** Service name */
            name: string;
            /** Service status */
            status: cloud.ServiceStatusEnum;
        }
        /** Cloud credit */
        export interface Credit {
            /** Available credit */
            available_credit: order.Price;
            /** Credit bill id */
            bill ? : string;
            /** Credit description */
            description ? : string;
            /** Credit id */
            id: number;
            /** Use credits on following products */
            products ? : string[];
            /** Total credit */
            total_credit: order.Price;
            /** Used credit */
            used_credit: order.Price;
            /** Credit validity */
            validity ? : cloud.common.VoucherValidity;
            /** Voucher code */
            voucher ? : string;
        }
        /** An execution of the backup workflow */
        export interface Execution {
            /** Last date of cron trigger execution */
            executedAt: string;
            /** Execution state */
            state: cloud.ExecutionStateEnum;
            /** Information about state */
            stateInfo: string;
        }
        /** Enum values for State */
        export enum ExecutionStateEnum {
            "CANCELED" = "CANCELED",
            "ERROR" = "ERROR",
            "IDLE" = "IDLE",
            "PAUSED" = "PAUSED",
            "RUNNING" = "RUNNING",
            "SUCCESS" = "SUCCESS"
        }
        /** Enum values for IpCountry */
        export enum IpCountryEnum {
            "au" = "au",
            "be" = "be",
            "ca" = "ca",
            "cz" = "cz",
            "de" = "de",
            "es" = "es",
            "fi" = "fi",
            "fr" = "fr",
            "ie" = "ie",
            "it" = "it",
            "lt" = "lt",
            "nl" = "nl",
            "pl" = "pl",
            "pt" = "pt",
            "sg" = "sg",
            "uk" = "uk",
            "us" = "us"
        }
        /** A public cloud lab permits to activate a feature in beta */
        export interface Lab {
            /** Lab ID */
            id: string;
            /** Lab name */
            name: string;
            /** Lab status */
            status: cloud.LabStatusEnum;
        }
        /** List of required agreements to activate the lab */
        export interface LabAgreements {
            /** List of agreements already accepted to activate the lab */
            accepted: number[];
            /** List of agreements to accept before activate the lab */
            toAccept: number[];
        }
        /** Enum values for Status */
        export enum LabStatusEnum {
            "activated" = "activated",
            "activating" = "activating",
            "closed" = "closed",
            "open" = "open"
        }
        /** An operation is an async process on your Project */
        export interface Operation {
            /** The action of the operation */
            action: string;
            /** The completed date of the operation */
            completedAt ? : string;
            /** The creation date of the operation */
            createdAt: string;
            /** Unique ID to describe the operation */
            id: string;
            /** The progression in percentage of the operation */
            progress: number;
            /** Affected regions of the operation */
            regions ? : string[];
            /** Affected resource of the operation */
            resourceId ? : string;
            /** The started date of the operation */
            startedAt ? : string;
            /** Operation status */
            status: cloud.OperationStatusEnum;
            /** Sub-operations of the operation */
            subOperations ? : cloud.SubOperation[];
        }
        /** Enum values for Status */
        export enum OperationStatusEnum {
            "completed" = "completed",
            "created" = "created",
            "in-error" = "in-error",
            "in-progress" = "in-progress",
            "unknown" = "unknown"
        }
        /** Project */
        export interface Project {
            /** Project access */
            access: cloud.AccessTypeEnum;
            /** Project creation date */
            creationDate: string;
            /** Description of your project */
            description ? : string;
            /** Expiration date of your project. After this date, your project will be deleted */
            expiration ? : string;
            /** Manual quota prevent automatic quota upgrade */
            manualQuota: boolean;
            /** Project order id */
            orderId ? : number;
            /** Order plan code */
            planCode: string;
            /** Project name */
            projectName ? : string;
            /** Project id */
            project_id: string;
            /** Current status */
            status: cloud.project.ProjectStatusEnum;
            /** Project unleashed */
            unleash: boolean;
        }
        /** Missing description */
        export interface ProjectActivateMonthlyBillingCreation {
            /** Instance ids and regions */
            instances: cloud.instance.MonthlyInstanceBulkParams[];
        }
        /** Missing description */
        export interface ProjectContainerRegistryCreation {
            /** Name of the new registry */
            name: string;
            /** ID of the plan to use for the new registry */
            planID: string;
            /** Region where to deploy the registry.  Get available regions with /cloud/project/{serviceName}/capabilities/containerRegistry. */
            region: string;
        }
        /** Missing description */
        export interface ProjectContainerRegistryUpdate {
            /** New registry name */
            name: string;
        }
        /** Missing description */
        export interface ProjectContainerRegistryUsersCreation {
            /** New user email */
            email ? : string;
            /** New user login */
            login ? : string;
        }
        /** Missing description */
        export interface ProjectInstanceBulkCreation {
            /** Create an autobackup workflow after instance start up */
            autobackup ? : cloud.instance.AutoBackup;
            /** Instance flavor id */
            flavorId: string;
            /** Start instance in group */
            groupId ? : string;
            /** Instance image id */
            imageId ? : string;
            /** Active monthly billing */
            monthlyBilling ? : boolean;
            /** Instance name */
            name: string;
            /** Create network interfaces */
            networks ? : cloud.instance.NetworkBulkParams[];
            /** Number of instances you want to create */
            number: number;
            /** Instance region */
            region: string;
            /** SSH keypair id */
            sshKeyId ? : string;
            /** Configuration information or scripts to use upon launch */
            userData ? : string;
            /** Specify a volume id to boot from it */
            volumeId ? : string;
        }
        /** Missing description */
        export interface ProjectInstanceCreation {
            /** Create an autobackup workflow after instance start up */
            autobackup ? : cloud.instance.AutoBackup;
            /** Instance flavor id */
            flavorId: string;
            /** Start instance in group */
            groupId ? : string;
            /** Instance image id */
            imageId ? : string;
            /** Active monthly billing */
            monthlyBilling ? : boolean;
            /** Instance name */
            name: string;
            /** Create network interfaces */
            networks ? : cloud.instance.NetworkParams[];
            /** Instance region */
            region: string;
            /** SSH keypair id */
            sshKeyId ? : string;
            /** Configuration information or scripts to use upon launch */
            userData ? : string;
            /** Specify a volume id to boot from it */
            volumeId ? : string;
        }
        /** Missing description */
        export interface ProjectInstanceGroupCreation {
            /** instance group name */
            name: string;
            /** Instance region */
            region: string;
            /** Instance group type */
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        /** Missing description */
        export interface ProjectInstanceInterfaceCreation {
            /** Static ip (Can only be defined for private networks) */
            ip ? : string;
            /** Network id */
            networkId: string;
        }
        /** Missing description */
        export interface ProjectInstanceRebootCreation {
            /** Reboot type (default soft) */
            type: cloud.instance.RebootTypeEnum;
        }
        /** Missing description */
        export interface ProjectInstanceReinstallCreation {
            /** Image to reinstall */
            imageId: string;
        }
        /** Missing description */
        export interface ProjectInstanceRescueModeCreation {
            /** Image to boot on */
            imageId ? : string;
            /** Enable rescue mode */
            rescue: boolean;
        }
        /** Missing description */
        export interface ProjectInstanceResizeCreation {
            /** Flavor id */
            flavorId: string;
        }
        /** Missing description */
        export interface ProjectInstanceSnapshotCreation {
            /** Snapshot name */
            snapshotName: string;
        }
        /** Missing description */
        export interface ProjectInstanceUpdate {
            /** Instance new name */
            instanceName: string;
        }
        /** Missing description */
        export interface ProjectIpFailoverAttachCreation {
            /** Attach failover ip to instance */
            instanceId: string;
        }
        /** Missing description */
        export interface ProjectKubeCreation {
            /** Kubernetes cluster customization */
            customization ? : cloud.ProjectKubeCustomization;
            /** Selected mode for kube-proxy */
            kubeProxyMode: cloud.kube.KubeProxyModeEnum;
            /** Kubernetes cluster name */
            name: string;
            /** Nodepool to init with cluster creation */
            nodepool: cloud.ProjectKubeCreationNodePool;
            /** The private network configuration. */
            privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
            /** OpenStack private network (or vrack) ID to bind to cluster */
            privateNetworkId: string;
            /** Kubernetes OpenStack region */
            region: string;
            /** Enum values for UpdatePolicy */
            updatePolicy ? : cloud.kube.UpdatePolicyEnum;
            /** Kubernetes version to install */
            version: cloud.kube.VersionEnum;
        }
        /** Missing description */
        export interface ProjectKubeCreationNodePool {
            /** Enable anti affinity groups for nodes in the pool */
            antiAffinity ? : boolean;
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Number of nodes to instantiate (1 by default) */
            desiredNodes: number;
            /** Nodes flavor */
            flavorName: string;
            /** Higher limit you accept for the desiredNodes value (100 by default) */
            maxNodes: number;
            /** Lower limit you accept for the desiredNodes value (0 by default) */
            minNodes: number;
            /** Enable monthly billing for nodes in the pool */
            monthlyBilled ? : boolean;
            /** NodePool name */
            name: string;
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Cluster customization */
        export interface ProjectKubeCustomization {
            /** Kubernetes cluster api server customization */
            apiServer ? : cloud.ProjectKubeCustomizationAPIServer;
            /** Kubernetes cluster kube-proxy customization */
            kubeProxy ? : cloud.ProjectKubeCustomizationKubeProxy;
        }
        /** Cluster API server customization */
        export interface ProjectKubeCustomizationAPIServer {
            /** Kubernetes cluster api server admission plugins customization */
            admissionPlugins ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPlugins;
        }
        /** Cluster API server admission plugins customization */
        export interface ProjectKubeCustomizationAPIServerAdmissionPlugins {
            /** Array of disabled admission plugins */
            disabled ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
            /** Array of enabled admission plugins */
            enabled ? : cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
        }
        /** Enum admission plugins */
        export enum ProjectKubeCustomizationAPIServerAdmissionPluginsEnum {
            "AlwaysPullImages" = "AlwaysPullImages",
            "NodeRestriction" = "NodeRestriction"
        }
        /** Cluster kube-proxy customization: iptables and ipvs configurations can both be set at the same time, kube-proxy will use the one according to the cluster's kubeProxyMode value */
        export interface ProjectKubeCustomizationKubeProxy {
            /** Kubernetes cluster kube-proxy customization of iptables specific config (durations format is RFC3339 duration, e.g. 'PT60S') */
            iptables ? : cloud.ProjectKubeCustomizationKubeProxyIptables;
            /** Kubernetes cluster kube-proxy customization of ipvs specific config (durations format is RFC3339 duration, e.g. 'PT60S') */
            ipvs ? : cloud.ProjectKubeCustomizationKubeProxyIpvs;
        }
        /** Configuration used when kube-proxy is configured with iptables mode (durations format is RFC3339 duration, e.g. 'PT60S') */
        export interface ProjectKubeCustomizationKubeProxyIptables {
            /** minSyncPeriod is the minimum period that iptables rules are refreshed, in RFC3339 duration format (e.g. 'PT60S') */
            minSyncPeriod ? : string;
            /** syncPeriod is the period that iptables rules are refreshed, in RFC3339 duration format (e.g. 'PT60S'). Must be greater than 0 */
            syncPeriod ? : string;
        }
        /** Configuration used when kube-proxy is configured with ipvs mode (durations format is RFC3339 duration, e.g. 'PT60S') */
        export interface ProjectKubeCustomizationKubeProxyIpvs {
            /** minSyncPeriod is the minimum period that ipvs rules are refreshed in RFC3339 duration format (e.g. 'PT60S') */
            minSyncPeriod ? : string;
            /** ipvs scheduler */
            scheduler ? : cloud.kube.KubeProxyIpvsSchedulerEnum;
            /** syncPeriod is the period that ipvs rules are refreshed in RFC3339 duration format (e.g. 'PT60S'). Must be greater than 0 */
            syncPeriod ? : string;
            /** tcpFinTimeout is the timeout value used for IPVS TCP sessions after receiving a FIN in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system */
            tcpFinTimeout ? : string;
            /** tcpTimeout is the timeout value used for idle IPVS TCP sessions in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system. Cannot be set between 'PT0S' and 'PT5S', in order to prevent in-cluster networking issues. */
            tcpTimeout ? : string;
            /** udpTimeout is the timeout value used for IPVS UDP packets in RFC3339 duration format (e.g. 'PT60S'). The default value is 'PT0S', which preserves the current timeout value on the system */
            udpTimeout ? : string;
        }
        /** Missing description */
        export interface ProjectKubeIpRestrictionUpsert {
            /** List of ips to add to the cluster api-server restrictions (format with /subnet available) */
            ips: string[];
        }
        /** Missing description */
        export interface ProjectKubeNodePoolAutoscalingParams {
            /** How long a node should be unneeded before it is eligible for scale down */
            scaleDownUnneededTimeSeconds: number;
            /** How long an unready node should be unneeded before it is eligible for scale down */
            scaleDownUnreadyTimeSeconds: number;
            /** Sum of cpu or memory of all pods running on the node divided by node's corresponding allocatable resource, below which a node can be considered for scale down */
            scaleDownUtilizationThreshold: number;
        }
        /** Missing description */
        export interface ProjectKubeNodePoolCreation {
            /** Enable anti affinity groups for nodes in the pool */
            antiAffinity ? : boolean;
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Autoscaling customization parameters */
            autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
            /** Number of nodes to instantiate (1 by default) */
            desiredNodes: number;
            /** Nodes flavor */
            flavorName: string;
            /** Higher limit you accept for the desiredNodes value (100 by default) */
            maxNodes: number;
            /** Lower limit you accept for the desiredNodes value (0 by default) */
            minNodes: number;
            /** Enable monthly billing for nodes in the pool */
            monthlyBilled ? : boolean;
            /** NodePool name */
            name: string;
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Missing description */
        export interface ProjectKubeNodePoolUpdate {
            /** Enable the auto-scaling on the pool */
            autoscale ? : boolean;
            /** Autoscaling customization parameters */
            autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
            /** New number of nodes wanted in the nodepool */
            desiredNodes: number;
            /** New maximal number of nodes wanted in the nodepool */
            maxNodes: number;
            /** New minimal number of nodes wanted in the nodepool */
            minNodes: number;
            /** List of specific node IDs, openstack instance IDs or Node.Spec.providerIDs to delete during downscale */
            nodesToRemove: string[];
            /** NodePool template to apply to each children nodes */
            template: cloud.kube.NodePoolTemplate;
        }
        /** Creation model for OIDC */
        export interface ProjectKubeOpenIdConnectCreation {
            /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
            caContent ? : string;
            /** Client ID */
            clientId: string;
            /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
            groupsClaim ? : string[];
            /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
            groupsPrefix ? : string;
            /** Issuer URL */
            issuerUrl: string;
            /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
            requiredClaim ? : string[];
            /** The signing algorithms accepted. Default is "RS256". */
            signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
            /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
            usernameClaim ? : string;
            /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
            usernamePrefix ? : string;
        }
        /** Update model for OIDC */
        export interface ProjectKubeOpenIdConnectUpdate {
            /** Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. */
            caContent ? : string;
            /** Client ID */
            clientId: string;
            /** JWT claim to use as the user's group. If the claim is present it must be an array of strings. */
            groupsClaim ? : string[];
            /** Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. */
            groupsPrefix ? : string;
            /** Issuer URL */
            issuerUrl: string;
            /** key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. */
            requiredClaim ? : string[];
            /** The signing algorithms accepted. Default is "RS256". */
            signingAlgorithms ? : cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
            /** JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. */
            usernameClaim ? : string;
            /** Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. */
            usernamePrefix ? : string;
        }
        /** Model object to reset kube cluster */
        export interface ProjectKubeResetCreation {
            /** Kubernetes cluster customization */
            customization: cloud.ProjectKubeCustomization;
            /** Selected mode for kube-proxy */
            kubeProxyMode: cloud.kube.KubeProxyModeEnum;
            /** New cluster name */
            name: string;
            /** The private network configuration. */
            privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
            /** OpenStack private network (or vrack) ID to bind to cluster */
            privateNetworkId: string;
            /** Enum values for UpdatePolicy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
            /** Kubernetes version to use after reset, by default it keeps the current version */
            version: cloud.kube.VersionEnum;
            /** Worker nodes reset policy, default is delete */
            workerNodesPolicy: cloud.kube.ResetWorkerNodesPolicyEnum;
        }
        /** Missing description */
        export interface ProjectKubeRestart {
            /** Force restarting control plane apiserver (will create a slight downtime) */
            force ? : boolean;
        }
        /** Missing description */
        export interface ProjectKubeUpdate {
            /** Cluster new name */
            name: string;
            /** Enum values for UpdatePolicy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
        }
        /** Missing description */
        export interface ProjectKubeUpdateCreation {
            /** Force redeploying the control plane / reinstalling the nodes regardless of their current version */
            force ? : boolean;
            /** The update strategy to apply on your service (next patch or minor version) */
            strategy: cloud.kube.UpdateStrategyEnum;
        }
        /** Missing description */
        export interface ProjectKubeUpdatePolicyUpdate {
            /** Update policy */
            updatePolicy: cloud.kube.UpdatePolicyEnum;
        }
        /** Missing description */
        export interface ProjectMigrationUpdate {
            /** Migration date (RFC3339) */
            date: string;
        }
        /** Missing description */
        export interface ProjectNetworkPrivateCreation {
            /** Network name */
            name: string;
            /** Region where to activate private network. No parameters means all region */
            regions ? : string[];
            /** Vland id, between 0 and 4000. 0 value means no vlan. */
            vlanId ? : number;
        }
        /** Missing description */
        export interface ProjectNetworkPrivateRegionCreation {
            /** Region to active on your network */
            region: string;
        }
        /** Missing description */
        export interface ProjectNetworkPrivateSubnetCreation {
            /** Enable DHCP */
            dhcp: boolean;
            /** Last IP for this region (eg: 192.168.1.24) */
            end: string;
            /** Global network with cidr (eg: 192.168.1.0/24) */
            network: string;
            /** Set to true if you don't want to set a default gateway IP */
            noGateway: boolean;
            /** Region where this subnet will be created */
            region: string;
            /** First IP for this region (eg: 192.168.1.12) */
            start: string;
        }
        /** Missing description */
        export interface ProjectNetworkPrivateSubnetUpdate {
            /** Set to true if you don't want to set a default gateway IP */
            dhcp: boolean;
            /** Set to true if you want to disable the default gateway */
            disableGateway: boolean;
            /** Gateway IP (this field is used if noGateway = false) */
            gatewayIp ? : string;
        }
        /** Missing description */
        export interface ProjectNetworkPrivateUpdate {
            /** name */
            name: string;
        }
        /** Missing description */
        export interface ProjectRegionCreation {
            /** Region to add on your project */
            region: string;
        }
        /** Missing description */
        export interface ProjectRegionQuotaCreation {
            /** Name of the new quota */
            name: string;
        }
        /** Missing description */
        export interface ProjectRegionWorkflowBackupCreation {
            /** Unix Cron pattern (eg: '* * * * *') */
            cron: string;
            /** Instance ID to backup */
            instanceId: string;
            /** Number of execution to process before ending the job. Null value means that the job will never end. */
            maxExecutionCount ? : number;
            /** Name of your backup job */
            name: string;
            /** Number of backup to keep */
            rotation: number;
        }
        /** Missing description */
        export interface ProjectSshkeyCreation {
            /** SSH key name */
            name: string;
            /** SSH public key */
            publicKey: string;
            /** Region to create SSH key */
            region ? : string;
        }
        /** Missing description */
        export interface ProjectStorageCorsCreation {
            /** Allow this origin */
            origin: string;
        }
        /** Missing description */
        export interface ProjectStorageCreation {
            /** Archive container flag */
            archive: boolean;
            /** Container name */
            containerName: string;
            /** Region */
            region: string;
        }
        /** Missing description */
        export interface ProjectStoragePublicUrlCreation {
            /** Temporary URL expiration */
            expirationDate: string;
            /** Object name */
            objectName: string;
        }
        /** Missing description */
        export interface ProjectStorageUpdate {
            /** Container type */
            containerType ? : cloud.storage.TypeEnum;
        }
        /** Missing description */
        export interface ProjectStorageUserCreation {
            /** User description */
            description ? : string;
            /** User right (all, read, write) */
            right: cloud.storage.RightEnum;
        }
        /** Missing description */
        export interface ProjectUserCreation {
            /** User description */
            description ? : string;
            /** Openstack keystone role name */
            role ? : cloud.user.RoleEnum;
            /** Openstack keystone roles names */
            roles ? : cloud.user.RoleEnum[];
        }
        /** Missing description */
        export interface ProjectUserRoleCreation {
            /** Role id */
            roleId: string;
        }
        /** Missing description */
        export interface ProjectUserRoleUpdate {
            /** Roles ids */
            rolesIds: string[];
        }
        /** Missing description */
        export interface ProjectUserTokenCreation {
            /** User password */
            password: string;
        }
        /** Missing description */
        export interface ProjectVolumeAttachCreation {
            /** Instance id */
            instanceId: string;
        }
        /** Missing description */
        export interface ProjectVolumeCreation {
            /** Volume description */
            description ? : string;
            /** Id of image to create a bootable volume */
            imageId ? : string;
            /** Volume name */
            name ? : string;
            /** Volume region */
            region: string;
            /** Volume size (in GiB) */
            size: number;
            /** Source snapshot id */
            snapshotId ? : string;
            /** Volume type */
            type: cloud.volume.VolumeTypeEnum;
        }
        /** Missing description */
        export interface ProjectVolumeDetachCreation {
            /** Instance id */
            instanceId: string;
        }
        /** Missing description */
        export interface ProjectVolumeSnapshotCreation {
            /** Snapshot description */
            description ? : string;
            /** Snapshot name */
            name ? : string;
        }
        /** Missing description */
        export interface ProjectVolumeUpdate {
            /** Volume description */
            description ? : string;
            /** Volume name */
            name ? : string;
        }
        /** Missing description */
        export interface ProjectVolumeUpsizeCreation {
            /** New volume size (in GiB) (must be greater than current one) */
            size: number;
        }
        /** Details about your region */
        export interface Region {
            /** Region continent code */
            continentCode: cloud.RegionContinentEnum;
            /** Location of the datacenter where the region is */
            datacenterLocation: string;
            /** Allowed countries for failover ip */
            ipCountries: cloud.IpCountryEnum[];
            /** Region name */
            name: string;
            /** Details about components status */
            services: cloud.Component[];
            /** Openstack region status */
            status: cloud.RegionStatusEnum;
        }
        /** Enum values for ContinentCode */
        export enum RegionContinentEnum {
            "ASIA" = "ASIA",
            "EU" = "EU",
            "NA" = "NA",
            "US" = "US"
        }
        /** Enum values for Status */
        export enum RegionStatusEnum {
            "DOWN" = "DOWN",
            "MAINTENANCE" = "MAINTENANCE",
            "UP" = "UP"
        }
        /** Enum values for Status */
        export enum ServiceStatusEnum {
            "DOWN" = "DOWN",
            "UP" = "UP"
        }
        /** Container */
        export interface StorageContainer {
            /** The date and timestamp when the resource was created */
            createdAt: string;
            /** Container name */
            name: string;
            /** Container objects */
            objects: cloud.StorageObject[];
            /** Container total objects count */
            objectsCount: number;
            /** Container total objects size (bytes) */
            objectsSize: number;
            /** Container owner user ID */
            ownerId: number;
            /** Container region */
            region: string;
            /** Container virtual host */
            virtualHost: string;
        }
        /** Create a container */
        export interface StorageContainerCreation {
            /** Container name */
            name: string;
            /** Container owner user ID */
            ownerId ? : number;
        }
        /** Object */
        export interface StorageObject {
            /** ETag */
            etag: string;
            /** Key */
            key: string;
            /** Last modification date */
            lastModified: string;
            /** Size (bytes) */
            size: number;
        }
        /** A sub-operation is a child of an operation on your Project */
        export interface SubOperation {
            /** The action of the sub-operation */
            action: string;
            /** The completed date of the sub-operation */
            completedAt ? : string;
            /** Unique ID to describe the sub-operation */
            id: string;
            /** The progression in percentage of the sub-operation */
            progress: number;
            /** Affected regions of the sub-operation */
            regions ? : string[];
            /** Affected resource of the sub-operation */
            resourceId ? : string;
            /** The started date of the sub-operation */
            startedAt ? : string;
            /** Sub-operation status */
            status: cloud.OperationStatusEnum;
        }
        /** A vRack allows to connect your OVH infrastructures accross products and datacenters */
        export interface Vrack {
            /** Description of your vRack */
            description: string;
            /** Vrack ID */
            id: string;
            /** Name of your vRack */
            name: string;
        }
    }
    export namespace complexType {
        /** A numeric value tagged with its unit */
        export interface UnitAndValue {
            /** unit */
            unit: string;
            /** value */
            value: T;
        }
        /** Key and value, with proper key strings */
        export interface SafeKeyValue {
            /** key */
            key: string;
            /** value */
            value: T;
        }
    }
    export namespace nichandle {
        export namespace Authentication {
            /** X509 Certificate */
            export interface Certificate {
                /** Certificate's expiration */
                expiration: string;
                /** Certificate's subject */
                subject: string;
            }
            /** A group */
            export interface Group {
                /** Creation date of this group */
                creation: string;
                /** True if it is an default group. This kind of group can't be edited or deleted */
                defaultGroup: boolean;
                /** Group's description */
                description: string;
                /** Last update of this group */
                lastUpdate: string;
                /** Group's name */
                name: string;
                /** Group's role */
                role: nichandle.Authentication.RoleEnum;
            }
            /** A SAML 2.0 provider */
            export interface Provider {
                /** Creation date of the identity provider */
                creation: string;
                /** SAML Extensions to embed inside the SAML requests */
                extensions ? : nichandle.Authentication.ProviderExtensions;
                /** SAML Group attribute name */
                groupAttributeName: string;
                /** IdP's signing certificate */
                idpSigningCertificates: nichandle.Authentication.Certificate[];
                /** Last update of the identity provider */
                lastUpdate: string;
                /** IdP's Single Sign On Service Url */
                ssoServiceUrl: string;
            }
            /** A SAML 2.0 Extension that should be added to SAML requests when using this provider */
            export interface ProviderExtensions {
                /** List of SAML RequestedAttribute to add to SAML requestes */
                requestedAttributes ? : nichandle.Authentication.RequestedAttribute[];
            }
            /** A SAML 2.0 requested attribute that should be added to SAML requests when using this provider */
            export interface RequestedAttribute {
                /** Expresses that this RequestedAttribute is mandatory (remains advisory) */
                isRequired: boolean;
                /** Name of the SAML RequestedAttribute */
                name: string;
                /** NameFormat of the SAML RequestedAttribute */
                nameFormat ? : string;
                /** List of AttributeValues allowed for this RequestedAttribute */
                values ? : string[];
            }
        }
        export namespace accessRestriction {
            /** Accept or deny IP access */
            export enum IpRestrictionRuleEnum {
                "accept" = "accept",
                "deny" = "deny"
            }
            /** SOTP Two-Factor Authentication */
            export interface SOTPAccount {
                /** Creation date */
                creationDate: string;
                /** Last used date */
                lastUsedDate ? : string;
                /** Number of remaining codes */
                remaining: number;
                /** Status of this account */
                status: nichandle.accessRestriction.SOTPStatusEnum;
            }
            /** Describe SOTP secret keys */
            export interface SOTPSecret {
                /** codes */
                codes: string[];
            }
            /** Status of SOTP account */
            export enum SOTPStatusEnum {
                "disabled" = "disabled",
                "enabled" = "enabled",
                "needCodeValidation" = "needCodeValidation",
                "needEmailValidation" = "needEmailValidation"
            }
            /** Describe SOTP validation status */
            export interface SOTPValidate {
                /** remainingCodes */
                remainingCodes: number;
            }
            /** Sms Two-Factor Authentication */
            export interface SmsAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this phone */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Associated phone number */
                phoneNumber: string;
                /** Status of this account */
                status: nichandle.accessRestriction.SmsStatusEnum;
            }
            /** Send secret code */
            export interface SmsCode {
                /** challenge */
                challenge: string;
            }
            /** Describe secret key */
            export interface SmsSecret {
                /** id */
                id: number;
                /** remainingTry */
                remainingTry: number;
            }
            /** Status of the Sms account */
            export enum SmsStatusEnum {
                "disabled" = "disabled",
                "enabled" = "enabled",
                "needCodeValidation" = "needCodeValidation",
                "needEmailValidation" = "needEmailValidation"
            }
            /** TOTP Two-Factor Authentication */
            export interface TOTPAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this TOTP */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Status of this account */
                status: nichandle.accessRestriction.TOTPStatusEnum;
            }
            /** Describe TOTP secret keys */
            export interface TOTPSecret {
                /** id */
                id: number;
                /** qrcodeHelper */
                qrcodeHelper: string;
                /** secret */
                secret: string;
            }
            /** Status of TOTP account */
            export enum TOTPStatusEnum {
                "disabled" = "disabled",
                "enabled" = "enabled",
                "needCodeValidation" = "needCodeValidation",
                "needEmailValidation" = "needEmailValidation"
            }
            /** U2F Two-Factor Authentication */
            export interface U2FAccount {
                /** Creation date */
                creationDate: string;
                /** Description of this U2F key */
                description: string;
                /** The Id of the restriction */
                id: number;
                /** Last used date */
                lastUsedDate ? : string;
                /** Status of this account */
                status: nichandle.accessRestriction.U2FStatusEnum;
            }
            /** U2F Register Request */
            export interface U2FRegisterChallenge {
                /** applicationId */
                applicationId: string;
                /** id */
                id: number;
                /** request */
                request: nichandle.accessRestriction.U2FRegistrationRequest;
            }
            /** Describe U2F RegistrationRequest */
            export interface U2FRegistrationRequest {
                /** challenge */
                challenge: string;
                /** version */
                version: string;
            }
            /** U2F Register Request */
            export interface U2FSignChallenge {
                /** applicationId */
                applicationId: string;
                /** request */
                request: nichandle.accessRestriction.U2FSignRequest;
            }
            /** Describe U2F SignRequest */
            export interface U2FSignRequest {
                /** challenge */
                challenge: string;
                /** keyHandle */
                keyHandle: string;
                /** version */
                version: string;
            }
            /** Status of U2F account */
            export enum U2FStatusEnum {
                "disabled" = "disabled",
                "enabled" = "enabled",
                "needCodeValidation" = "needCodeValidation"
            }
        }
        export namespace changeContact {
            /** Allowed types of contact who can be changed by change contact task */
            export enum ContactTypeEnum {
                "contactAdmin" = "contactAdmin",
                "contactBilling" = "contactBilling",
                "contactTech" = "contactTech"
            }
            /** State of contact change task */
            export enum TaskStateEnum {
                "aborted" = "aborted",
                "checkValidity" = "checkValidity",
                "doing" = "doing",
                "done" = "done",
                "error" = "error",
                "expired" = "expired",
                "refused" = "refused",
                "todo" = "todo",
                "validatingByCustomers" = "validatingByCustomers"
            }
        }
        export namespace changeEmail {
            /** State of email change task */
            export enum TaskStateEnum {
                "aborted" = "aborted",
                "done" = "done",
                "refused" = "refused",
                "todo" = "todo"
            }
        }
        export namespace contactChange {
            /** Task running a contact change on a service */
            export interface Task {
                /** Account who asked the contact change */
                askingAccount ? : string;
                /** Contacts to be changed */
                contactTypes: nichandle.changeContact.ContactTypeEnum[];
                /** Date at which the contact change has been finished */
                dateDone ? : string;
                /** Date at which the request has been made */
                dateRequest: string;
                /** Account to change contact from */
                fromAccount: string;
                /** id */
                id: number;
                /** The service on which the task runs */
                serviceDomain ? : string;
                /** Current state of the request */
                state: nichandle.changeContact.TaskStateEnum;
                /** Account to change contact to */
                toAccount: string;
            }
        }
        export namespace document {
            /** List of documents added on your account */
            export interface Document {
                /** Document creation */
                creationDate: string;
                /** Document expiration */
                expirationDate ? : string;
                /** URL used to get document */
                getUrl: string;
                /** Document id */
                id: string;
                /** Document name */
                name: string;
                /** URL used to put document */
                putUrl: string;
                /** Document size (in bytes) */
                size: number;
                /** Document tags */
                tags: complexType.SafeKeyValue < string > [];
                /** Document validation */
                validationDate ? : string;
            }
        }
        export namespace emailChange {
            /** Task running an email change on an account */
            export interface Task {
                /** End date of that request */
                dateDone ? : string;
                /** Creation date of that request */
                dateRequest: string;
                /** id */
                id: number;
                /** The email address to change for */
                newEmail: string;
                /** Current state of the request */
                state: nichandle.changeEmail.TaskStateEnum;
            }
        } /** OVH subsidiaries */
        export enum OvhSubsidiaryEnum {
            "CZ" = "CZ",
            "DE" = "DE",
            "ES" = "ES",
            "EU" = "EU",
            "FI" = "FI",
            "FR" = "FR",
            "GB" = "GB",
            "IE" = "IE",
            "IT" = "IT",
            "LT" = "LT",
            "MA" = "MA",
            "NL" = "NL",
            "PL" = "PL",
            "PT" = "PT",
            "SN" = "SN",
            "TN" = "TN"
        }
        /** Permission given on the account */
        export enum RoleEnum {
            "REGULAR" = "REGULAR",
            "ADMIN" = "ADMIN",
            "UNPRIVILEGED" = "UNPRIVILEGED",
            "NONE" = "NONE"
        }
        /** Internal customer billing capacities for customer control panel */
        export interface BillingCapacities {
            /** Indicates if the debt system has been enabled on the customer account */
            canUseDebtSystem: boolean;
            /** Indicates customer's ability to use postal mailing for invoices */
            canUsePostalMailForInvoices: boolean;
            /** Indicates the mandatory nature of having a valid payment method */
            requiredPaymentMethod: nichandle.RequiredPaymentMethodEnum;
        }
        /** Countries a nichandle can choose */
        export enum CountryEnum {
            "AC" = "AC",
            "AD" = "AD",
            "AE" = "AE",
            "AF" = "AF",
            "AG" = "AG",
            "AI" = "AI",
            "AL" = "AL",
            "AM" = "AM",
            "AO" = "AO",
            "AQ" = "AQ",
            "AR" = "AR",
            "AS" = "AS",
            "AT" = "AT",
            "AU" = "AU",
            "AW" = "AW",
            "AX" = "AX",
            "AZ" = "AZ",
            "BA" = "BA",
            "BB" = "BB",
            "BD" = "BD",
            "BE" = "BE",
            "BF" = "BF",
            "BG" = "BG",
            "BH" = "BH",
            "BI" = "BI",
            "BJ" = "BJ",
            "BL" = "BL",
            "BM" = "BM",
            "BN" = "BN",
            "BO" = "BO",
            "BQ" = "BQ",
            "BR" = "BR",
            "BS" = "BS",
            "BT" = "BT",
            "BW" = "BW",
            "BY" = "BY",
            "BZ" = "BZ",
            "CA" = "CA",
            "CC" = "CC",
            "CD" = "CD",
            "CF" = "CF",
            "CG" = "CG",
            "CH" = "CH",
            "CI" = "CI",
            "CK" = "CK",
            "CL" = "CL",
            "CM" = "CM",
            "CN" = "CN",
            "CO" = "CO",
            "CR" = "CR",
            "CU" = "CU",
            "CV" = "CV",
            "CW" = "CW",
            "CX" = "CX",
            "CY" = "CY",
            "CZ" = "CZ",
            "DE" = "DE",
            "DG" = "DG",
            "DJ" = "DJ",
            "DK" = "DK",
            "DM" = "DM",
            "DO" = "DO",
            "DZ" = "DZ",
            "EA" = "EA",
            "EC" = "EC",
            "EE" = "EE",
            "EG" = "EG",
            "EH" = "EH",
            "ER" = "ER",
            "ES" = "ES",
            "ET" = "ET",
            "FI" = "FI",
            "FJ" = "FJ",
            "FK" = "FK",
            "FM" = "FM",
            "FO" = "FO",
            "FR" = "FR",
            "GA" = "GA",
            "GB" = "GB",
            "GD" = "GD",
            "GE" = "GE",
            "GF" = "GF",
            "GG" = "GG",
            "GH" = "GH",
            "GI" = "GI",
            "GL" = "GL",
            "GM" = "GM",
            "GN" = "GN",
            "GP" = "GP",
            "GQ" = "GQ",
            "GR" = "GR",
            "GS" = "GS",
            "GT" = "GT",
            "GU" = "GU",
            "GW" = "GW",
            "GY" = "GY",
            "HK" = "HK",
            "HN" = "HN",
            "HR" = "HR",
            "HT" = "HT",
            "HU" = "HU",
            "IC" = "IC",
            "ID" = "ID",
            "IE" = "IE",
            "IL" = "IL",
            "IM" = "IM",
            "IN" = "IN",
            "IO" = "IO",
            "IQ" = "IQ",
            "IR" = "IR",
            "IS" = "IS",
            "IT" = "IT",
            "JE" = "JE",
            "JM" = "JM",
            "JO" = "JO",
            "JP" = "JP",
            "KE" = "KE",
            "KG" = "KG",
            "KH" = "KH",
            "KI" = "KI",
            "KM" = "KM",
            "KN" = "KN",
            "KP" = "KP",
            "KR" = "KR",
            "KW" = "KW",
            "KY" = "KY",
            "KZ" = "KZ",
            "LA" = "LA",
            "LB" = "LB",
            "LC" = "LC",
            "LI" = "LI",
            "LK" = "LK",
            "LR" = "LR",
            "LS" = "LS",
            "LT" = "LT",
            "LU" = "LU",
            "LV" = "LV",
            "LY" = "LY",
            "MA" = "MA",
            "MC" = "MC",
            "MD" = "MD",
            "ME" = "ME",
            "MF" = "MF",
            "MG" = "MG",
            "MH" = "MH",
            "MK" = "MK",
            "ML" = "ML",
            "MM" = "MM",
            "MN" = "MN",
            "MO" = "MO",
            "MP" = "MP",
            "MQ" = "MQ",
            "MR" = "MR",
            "MS" = "MS",
            "MT" = "MT",
            "MU" = "MU",
            "MV" = "MV",
            "MW" = "MW",
            "MX" = "MX",
            "MY" = "MY",
            "MZ" = "MZ",
            "NA" = "NA",
            "NC" = "NC",
            "NE" = "NE",
            "NF" = "NF",
            "NG" = "NG",
            "NI" = "NI",
            "NL" = "NL",
            "NO" = "NO",
            "NP" = "NP",
            "NR" = "NR",
            "NU" = "NU",
            "NZ" = "NZ",
            "OM" = "OM",
            "PA" = "PA",
            "PE" = "PE",
            "PF" = "PF",
            "PG" = "PG",
            "PH" = "PH",
            "PK" = "PK",
            "PL" = "PL",
            "PM" = "PM",
            "PN" = "PN",
            "PR" = "PR",
            "PS" = "PS",
            "PT" = "PT",
            "PW" = "PW",
            "PY" = "PY",
            "QA" = "QA",
            "RE" = "RE",
            "RO" = "RO",
            "RS" = "RS",
            "RU" = "RU",
            "RW" = "RW",
            "SA" = "SA",
            "SB" = "SB",
            "SC" = "SC",
            "SD" = "SD",
            "SE" = "SE",
            "SG" = "SG",
            "SH" = "SH",
            "SI" = "SI",
            "SJ" = "SJ",
            "SK" = "SK",
            "SL" = "SL",
            "SM" = "SM",
            "SN" = "SN",
            "SO" = "SO",
            "SR" = "SR",
            "SS" = "SS",
            "ST" = "ST",
            "SV" = "SV",
            "SX" = "SX",
            "SY" = "SY",
            "SZ" = "SZ",
            "TA" = "TA",
            "TC" = "TC",
            "TD" = "TD",
            "TF" = "TF",
            "TG" = "TG",
            "TH" = "TH",
            "TJ" = "TJ",
            "TK" = "TK",
            "TL" = "TL",
            "TM" = "TM",
            "TN" = "TN",
            "TO" = "TO",
            "TR" = "TR",
            "TT" = "TT",
            "TV" = "TV",
            "TW" = "TW",
            "TZ" = "TZ",
            "UA" = "UA",
            "UG" = "UG",
            "UM" = "UM",
            "UNKNOWN" = "UNKNOWN",
            "US" = "US",
            "UY" = "UY",
            "UZ" = "UZ",
            "VA" = "VA",
            "VC" = "VC",
            "VE" = "VE",
            "VG" = "VG",
            "VI" = "VI",
            "VN" = "VN",
            "VU" = "VU",
            "WF" = "WF",
            "WS" = "WS",
            "XK" = "XK",
            "YE" = "YE",
            "YT" = "YT",
            "ZA" = "ZA",
            "ZM" = "ZM",
            "ZW" = "ZW"
        }
        /** Customer currency */
        export interface Currency {
            /** Currency code */
            code: string;
            /** Currency symbol */
            symbol: string;
        }
        /** Login restrictions on a development version of the Manager */
        export interface DeveloperModeRestriction {
            /** Allow login on your account on a development version of the Manager */
            enabled: boolean;
        }
        /** Domain operation argument */
        export interface DomainTaskArgument {
            /** List of accepted formats */
            acceptedFormats ? : domain.DocumentFormatsEnum[];
            /** List of accepted values */
            acceptedValues ? : string[];
            /** Description of the argument */
            description ? : string;
            /** List of impacted field names */
            fields ? : xander.ContactFieldEnum[];
            /** Key of the argument */
            key: string;
            /** Maximum of the content length that you can send */
            maximumSize ? : number;
            /** Minimum of the content length that you can send */
            minimumSize ? : number;
            /** True if the argument is in read only */
            readOnly: boolean;
            /** Template of the content */
            template ? : string;
            /** Type of the argument */
            type: string;
            /** Value of the argument */
            value ? : string;
        }
        /** Domain operation progress */
        export interface DomainTaskProgressBar {
            /** Current step of the operation */
            currentStep: domain.OperationStep;
            /** The estimated end date of the task */
            expectedDoneDate ? : string;
            /** All the steps of the operation */
            followUpSteps ? : domain.OperationStep[];
            /** The last update date of the task */
            lastUpdateDate ? : string;
            /** Progress percentage of the task */
            progress: number;
            /** Action possible on task */
            taskActions: domain.OperationActionEnum[];
            /** The status of the task */
            taskStatus: domain.OperationStatusEnum;
        }
        /** Email notification received */
        export interface EmailNotification {
            /** Content of the email */
            body: string;
            /** Date at which the email was sent */
            date: string;
            /** ID of the email notification */
            id: number;
            /** Subject of the email */
            subject: string;
        }
        /** All genders a person can choose */
        export enum GenderEnum {
            "female" = "female",
            "male" = "male"
        }
        /** Ip registries */
        export enum IpRegistryEnum {
            "ARIN" = "ARIN",
            "RIPE" = "RIPE"
        }
        /** List of all IP Restrictions */
        export interface IpRestriction {
            /** The Id of the restriction */
            id: number;
            /** An IP range where we will apply the rule */
            ip: string;
            /** Accept or deny IP access */
            rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
            /** Send an email if someone try to access with this IP address */
            warning: boolean;
        }
        /** IP Restriction default rule */
        export interface IpRestrictionDefaultRule {
            /** Accept or deny access */
            rule: nichandle.accessRestriction.IpRestrictionRuleEnum;
            /** Send an email if someone try to access */
            warning: boolean;
        }
        /** Details about an IP block organisation */
        export interface Ipv4Org {
            /** abuse_mailbox */
            abuse_mailbox: string;
            /** address */
            address: string;
            /** city */
            city: string;
            /** country */
            country: nichandle.CountryEnum;
            /** firstname */
            firstname: string;
            /** lastname */
            lastname: string;
            /** organisationId */
            organisationId: string;
            /** phone */
            phone: string;
            /** registry */
            registry: nichandle.IpRegistryEnum;
            /** state */
            state ? : string;
            /** zip */
            zip ? : string;
        }
        /** Languages a nichandle can choose */
        export enum LanguageEnum {
            "cs_CZ" = "cs_CZ",
            "de_DE" = "de_DE",
            "en_AU" = "en_AU",
            "en_CA" = "en_CA",
            "en_GB" = "en_GB",
            "en_IE" = "en_IE",
            "en_US" = "en_US",
            "es_ES" = "es_ES",
            "fi_FI" = "fi_FI",
            "fr_CA" = "fr_CA",
            "fr_FR" = "fr_FR",
            "fr_MA" = "fr_MA",
            "fr_SN" = "fr_SN",
            "fr_TN" = "fr_TN",
            "it_IT" = "it_IT",
            "lt_LT" = "lt_LT",
            "nl_NL" = "nl_NL",
            "pl_PL" = "pl_PL",
            "pt_PT" = "pt_PT"
        }
        /** Legal forms a nichandle can be registered as */
        export enum LegalFormEnum {
            "administration" = "administration",
            "association" = "association",
            "corporation" = "corporation",
            "individual" = "individual",
            "other" = "other",
            "personalcorporation" = "personalcorporation"
        }
        /** Manager preference */
        export interface ManagerPreference {
            /** This preference key */
            key: string;
            /** This preference value */
            value: string;
        }
        /** Auto renewal information */
        export interface NicAutorenewInfos {
            /** Renewal active or not */
            active: boolean;
            /** give the last renew */
            lastRenew ? : string;
            /** give the renewal day */
            renewDay: number;
        }
        /** Details about your OVH identifier */
        export interface Nichandle {
            /** Address of nichandle */
            address ? : string;
            /** Area of nichandle */
            area ? : string;
            /** City of birth */
            birthCity ? : string;
            /** Birth date */
            birthDay ? : string;
            /** City of nichandle */
            city ? : string;
            /** Company National Identification Number */
            companyNationalIdentificationNumber ? : string;
            /** Complementary Address */
            complementaryAddress ? : string;
            /** Corporation type */
            corporationType ? : string;
            /** Customer country */
            country: nichandle.CountryEnum;
            /** Customer currency */
            currency: nichandle.Currency;
            /** Your customer code (a numerical value used for identification when contacting support via phone call) */
            customerCode ? : string;
            /** Email address */
            email: string;
            /** Fax number */
            fax ? : string;
            /** First name */
            firstname ? : string;
            /** Italian SDI */
            italianSDI ? : string;
            /** KYC validation state */
            kycValidated ? : boolean;
            /** Language */
            language ? : nichandle.LanguageEnum;
            /** Customer legal form */
            legalform: nichandle.LegalFormEnum;
            /** Customer name */
            name ? : string;
            /** National Identification Number */
            nationalIdentificationNumber ? : string;
            /** Customer identifier */
            nichandle: string;
            /** Name of organisation */
            organisation ? : string;
            /** OVH company */
            ovhCompany: nichandle.OvhCompanyEnum;
            /** OVH subsidiary */
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
            /** Phone number */
            phone ? : string;
            /** phoneCountry */
            phoneCountry ? : nichandle.CountryEnum;
            /** Type of phone(mobile, landline) */
            phoneType ? : nichandle.PhoneTypeEnum;
            /** Customer purpose of purchase */
            purposeOfPurchase ? : string;
            /** Gender */
            sex ? : nichandle.GenderEnum;
            /** Spare email */
            spareEmail ? : string;
            /** Nichandle state */
            state: nichandle.StateEnum;
            /** VAT number */
            vat ? : string;
            /** Zipcode */
            zip ? : string;
        }
        /** SMS notifications */
        export interface NichandleSmsNotification {
            /** Receive notification for abuse reports */
            abuse: boolean;
            /** Creation date */
            creationDate: string;
            /** The phone number you want to receive notification on */
            phoneNumber: string;
            /** Status of your notification */
            status: nichandle.NotificationStatusEnum;
            /** Last update date */
            updateDate ? : string;
        }
        /** Status of your notification */
        export enum NotificationStatusEnum {
            "ok" = "ok",
            "waitingForValidation" = "waitingForValidation"
        }
        /** OVH companies */
        export enum OvhCompanyEnum {
            "kimsufi" = "kimsufi",
            "ovh" = "ovh",
            "soyoustart" = "soyoustart"
        }
        /** All phone type a person can choose */
        export enum PhoneTypeEnum {
            "landline" = "landline",
            "mobile" = "mobile"
        }
        /** Indicates the mandatory nature of having a valid payment method */
        export enum RequiredPaymentMethodEnum {
            "mandatoryForAutorenew" = "mandatoryForAutorenew",
            "mandatoryForPostpaid" = "mandatoryForPostpaid",
            "notMandatory" = "notMandatory"
        }
        /** States a nichandle can be in */
        export enum StateEnum {
            "complete" = "complete",
            "incomplete" = "incomplete"
        }
        /** Sub Account */
        export interface SubAccount {
            /** Creation date */
            creationDate: string;
            /** This sub-account description */
            description ? : string;
            /** This sub-account id */
            id: number;
        }
        /** Credentials to interact with the api on behalf of the sub-account */
        export interface SubAccountConsumerKey {
            /** The consumer key */
            consumerKey: string;
        }
        /** List of all OVH things you can subscribe to */
        export interface Subscription {
            /** Determine whether you are registered or not */
            registered ? : boolean;
            /** The type of subscription */
            type: string;
        }
        /** A user */
        export interface User {
            /** Creation date of this user */
            creation: string;
            /** User's description */
            description: string;
            /** User's email */
            email: string;
            /** User's group */
            group: string;
            /** Last update of this user */
            lastUpdate: string;
            /** User's login suffix */
            login: string;
            /** When the user changed his password for the last time */
            passwordLastUpdate: string;
            /** Current user's status */
            status: nichandle.UserStatus;
        }
        /** Status of a User */
        export enum UserStatus {
            "OK" = "OK",
            "DISABLED" = "DISABLED",
            "PASSWORD_CHANGE_REQUIRED" = "PASSWORD_CHANGE_REQUIRED"
        }
        /** VIP Status by Universe */
        export interface VipStatus {
            /** Is account VIP for Cloud Universe */
            cloud: boolean;
            /** Is account VIP for Dedicated Universe */
            dedicated: boolean;
            /** Is account VIP for Telecom Universe */
            telecom: boolean;
            /** Is account VIP for Web Universe */
            web: boolean;
        }
        /** Voucher Status and Information */
        export interface VoucherStatus {
            /** Is voucher valid */
            validity: boolean;
        }
        /** Email notification */
        export interface emailNotification {
            /** This email body */
            body: string;
            /** This email date */
            date: string;
            /** This email Id */
            id: number;
            /** This email subject */
            subject: string;
        }
        /** Customer IPXE scripts */
        export interface ipxe {
            /** Name of this script */
            name: string;
            /** Content of your IPXE script */
            script: string;
        }
        /** Customer public SSH key, can be used for rescue netboot or server access after reinstallation */
        export interface sshKey {
            /** True when this public SSH key is used for rescue mode and reinstallations */
            default: boolean;
            /** ASCII encoded public SSH key */
            key: string;
            /** Name of this public SSH key */
            keyName: string;
        }
    }
    export namespace order {
        export namespace cart {
            /** Representation of a generic product */
            export interface GenericProductDefinition {
                /** Product offer identifier */
                planCode: string;
                /** Prices of the product offer */
                prices: order.cart.GenericProductPricing[];
                /** Name of the product */
                productName: string;
                /** Product type */
                productType: order.cart.GenericProductTypeEnum;
            }
            /** Representation of a product pricing */
            export interface GenericProductPricing {
                /** Capacities of the pricing (type of pricing) */
                capacities: order.cart.GenericProductPricingCapacitiesEnum[];
                /** Description of the pricing */
                description: string;
                /** Duration for ordering the product */
                duration: string;
                /** Interval of renewal */
                interval: number;
                /** Maximum quantity that can be ordered */
                maximumQuantity ? : number;
                /** Maximum repeat for renewal */
                maximumRepeat ? : number;
                /** Minimum quantity that can be ordered */
                minimumQuantity: number;
                /** Minimum repeat for renewal */
                minimumRepeat: number;
                /** Price of the product */
                price: order.Price;
                /** Price of the product in micro-centims */
                priceInUcents: number;
                /** Pricing model identifier */
                pricingMode: string;
                /** Pricing type */
                pricingType: order.cart.GenericProductPricingTypeEnum;
            }
            /** Capacity of a pricing (type) */
            export enum GenericProductPricingCapacitiesEnum {
                "consumption" = "consumption",
                "detach" = "detach",
                "downgrade" = "downgrade",
                "dynamic" = "dynamic",
                "installation" = "installation",
                "renew" = "renew",
                "upgrade" = "upgrade"
            }
            /** Type of a pricing */
            export enum GenericProductPricingTypeEnum {
                "consumption" = "consumption",
                "purchase" = "purchase",
                "rental" = "rental"
            }
            /** Type of a product */
            export enum GenericProductTypeEnum {
                "cloud_service" = "cloud_service",
                "delivery" = "delivery",
                "deposit" = "deposit",
                "domain" = "domain",
                "implementation_services" = "implementation_services",
                "saas_license" = "saas_license",
                "shipping" = "shipping",
                "storage" = "storage"
            }
        } /** Currency code */
        export enum CurrencyCodeEnum {
            "AUD" = "AUD",
            "CAD" = "CAD",
            "CZK" = "CZK",
            "EUR" = "EUR",
            "GBP" = "GBP",
            "INR" = "INR",
            "LTL" = "LTL",
            "MAD" = "MAD",
            "N/A" = "N/A",
            "PLN" = "PLN",
            "SGD" = "SGD",
            "TND" = "TND",
            "USD" = "USD",
            "XOF" = "XOF",
            "points" = "points"
        }
        /** Price with its currency and textual representation */
        export interface Price {
            /** Currency code */
            currencyCode: order.CurrencyCodeEnum;
            /** Textual representation */
            text: string;
            /** The effective price */
            value: number;
        }
        /** A contract */
        export interface Contract {
            /** Terms of the contract */
            content: string;
            /** Name of the contract */
            name: string;
            /** URL to download the contract */
            url: string;
        }
        /** An order */
        export interface Order {
            /** List of contracts related to the order */
            contracts: order.Contract[];
            /** Details of the order */
            details: order.OrderDetail[];
            /** Identifier of the order */
            orderId ? : number;
            /** Prices of the order including with and without taxes */
            prices: order.OrderPrices;
            /** URL to download the order */
            url ? : string;
        }
        /** Detail of an order */
        export interface OrderDetail {
            /** Cart Item ID the details is related to */
            cartItemID ? : number;
            /** Description of the detail */
            description: string;
            /** Type of detail */
            detailType ? : order.OrderDetailTypeEnum;
            /** Service name */
            domain: string;
            /** Original price of the detail before reduction application */
            originalTotalPrice: order.Price;
            /** Quantity of the service */
            quantity: number;
            /** Total price of the reduction */
            reductionTotalPrice: order.Price;
            /** List of reductions applied to the detail */
            reductions: order.Reduction[];
            /** Price total of the services */
            totalPrice: order.Price;
            /** Unitary price of the service */
            unitPrice: order.Price;
        }
        /** Product type of item in order */
        export enum OrderDetailTypeEnum {
            "ACCESSORY" = "ACCESSORY",
            "CAUTION" = "CAUTION",
            "CHOOSED" = "CHOOSED",
            "CONSUMPTION" = "CONSUMPTION",
            "CREATION" = "CREATION",
            "DELIVERY" = "DELIVERY",
            "DURATION" = "DURATION",
            "GIFT" = "GIFT",
            "INSTALLATION" = "INSTALLATION",
            "LICENSE" = "LICENSE",
            "MUTE" = "MUTE",
            "OTHER" = "OTHER",
            "OUTPLAN" = "OUTPLAN",
            "QUANTITY" = "QUANTITY",
            "REFUND" = "REFUND",
            "RENEW" = "RENEW",
            "SPECIAL" = "SPECIAL",
            "SWITCH" = "SWITCH",
            "TRANSFER" = "TRANSFER",
            "VOUCHER" = "VOUCHER"
        }
        /** Prices of an order */
        export interface OrderPrices {
            /** Price before reduction application */
            originalWithoutTax ? : order.Price;
            /** Price concerning the reduced amount */
            reduction ? : order.Price;
            /** Tax amount */
            tax: order.Price;
            /** Price with tax */
            withTax: order.Price;
            /** Price without tax */
            withoutTax: order.Price;
        }
        /** Order detail reduction */
        export interface Reduction {
            /** In which context the reduction is applied */
            context: order.ReductionContextEnum;
            /** Promotion description */
            description: string;
            /** Reduction price applied with this promotion */
            price: order.Price;
            /** Reduction description */
            reductionDescription: string;
            /** Reduction effect, price modification */
            type: order.ReductionTypeEnum;
            /** The reduction value */
            value: order.Price;
        }
        /** Context of the reduction */
        export enum ReductionContextEnum {
            "promotion" = "promotion",
            "voucher" = "voucher"
        }
        /** Type of reduction */
        export enum ReductionTypeEnum {
            "fixed_amount" = "fixed_amount",
            "forced_amount" = "forced_amount",
            "percentage" = "percentage"
        }
    }
    export namespace service {
        /** Map a possible renew for a specific service */
        export interface RenewType {
            /** The service is automatically renewed */
            automatic: boolean;
            /** The service will be deleted at expiration */
            deleteAtExpiration: boolean;
            /** The service forced to be renewed */
            forced: boolean;
            /** The service needs to be manually renewed and paid */
            manualPayment ? : boolean;
            /** period of renew in month */
            period ? : number;
        }
        /** Detailed renewal type of a service */
        export enum RenewalTypeEnum {
            "automaticForcedProduct" = "automaticForcedProduct",
            "automaticV2012" = "automaticV2012",
            "automaticV2014" = "automaticV2014",
            "automaticV2016" = "automaticV2016",
            "manual" = "manual",
            "oneShot" = "oneShot",
            "option" = "option"
        }
        /** StateEnum */
        export enum StateEnum {
            "expired" = "expired",
            "inCreation" = "inCreation",
            "ok" = "ok",
            "pendingDebt" = "pendingDebt",
            "unPaid" = "unPaid"
        }
        /** All future uses you can provide for a service termination */
        export enum TerminationFutureUseEnum {
            "NOT_REPLACING_SERVICE" = "NOT_REPLACING_SERVICE",
            "OTHER" = "OTHER",
            "SUBSCRIBE_AN_OTHER_SERVICE" = "SUBSCRIBE_AN_OTHER_SERVICE",
            "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
            "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR" = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
        }
        /** All reasons you can provide for a service termination */
        export enum TerminationReasonEnum {
            "FEATURES_DONT_SUIT_ME" = "FEATURES_DONT_SUIT_ME",
            "LACK_OF_PERFORMANCES" = "LACK_OF_PERFORMANCES",
            "MIGRATED_TO_ANOTHER_OVH_PRODUCT" = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
            "MIGRATED_TO_COMPETITOR" = "MIGRATED_TO_COMPETITOR",
            "NOT_ENOUGH_RECOGNITION" = "NOT_ENOUGH_RECOGNITION",
            "NOT_NEEDED_ANYMORE" = "NOT_NEEDED_ANYMORE",
            "NOT_RELIABLE" = "NOT_RELIABLE",
            "NO_ANSWER" = "NO_ANSWER",
            "OTHER" = "OTHER",
            "PRODUCT_DIMENSION_DONT_SUIT_ME" = "PRODUCT_DIMENSION_DONT_SUIT_ME",
            "PRODUCT_TOOLS_DONT_SUIT_ME" = "PRODUCT_TOOLS_DONT_SUIT_ME",
            "TOO_EXPENSIVE" = "TOO_EXPENSIVE",
            "TOO_HARD_TO_USE" = "TOO_HARD_TO_USE",
            "UNSATIFIED_BY_CUSTOMER_SUPPORT" = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
        }
    }
    export namespace services {
        export namespace expanded {
            /** Route of the service */
            export interface Route {
                /** Path to use in API */
                path ? : string;
                /** Path with variables applied */
                url ? : string;
                /** Variables to use in the path */
                vars: complexType.SafeKeyValue < string > [];
            }
        } /** Details about a Service */
        export interface Service {
            /** Indicates that the service can be set up to be deleted at expiration */
            canDeleteAtExpiration: boolean;
            /** contactAdmin */
            contactAdmin: string;
            /** contactBilling */
            contactBilling: string;
            /** contactTech */
            contactTech: string;
            /** creation */
            creation: string;
            /** domain */
            domain: string;
            /** engagedUpTo */
            engagedUpTo ? : string;
            /** expiration */
            expiration: string;
            /** All the possible renew period of your service in month */
            possibleRenewPeriod ? : number[];
            /** Way of handling the renew */
            renew ? : service.RenewType;
            /** renewalType */
            renewalType: service.RenewalTypeEnum;
            /** serviceId */
            serviceId: long;
            /** status */
            status: service.StateEnum;
        }
    }
    export namespace agreements {
        /** The current state of a contract agreement */
        export enum AgreementStateEnum {
            "ko" = "ko",
            "obsolete" = "obsolete",
            "ok" = "ok",
            "todo" = "todo"
        }
        /** Contract of service */
        export interface Contract {
            /** Is this contract currently active or not ? */
            active: boolean;
            /** Date the contract was created on */
            date: string;
            /** Name of of the contract */
            name: string;
            /** URL you can download the contract at */
            pdf: string;
            /** Full text of the contract */
            text: string;
        }
        /** Contract agreement */
        export interface ContractAgreement {
            /** State of the agreement */
            agreed: agreements.AgreementStateEnum;
            /** Id of the agreed contract */
            contractId: number;
            /** Date the agreed contract was effective */
            date: string;
            /** Id of the contract */
            id: number;
        }
    }
    export namespace api {
        /** API Application */
        export interface Application {
            /** applicationId */
            applicationId: number;
            /** applicationKey */
            applicationKey: string;
            /** description */
            description: string;
            /** name */
            name: string;
            /** status */
            status: api.ApplicationStatusEnum;
        }
        /** List of state of an Api Application */
        export enum ApplicationStatusEnum {
            "active" = "active",
            "blocked" = "blocked",
            "inactive" = "inactive",
            "trusted" = "trusted"
        }
        /** API Credential */
        export interface Credential {
            /** If defined, list of ip blocks which are allowed to call API with this credential */
            allowedIPs ? : string[];
            /** applicationId */
            applicationId: number;
            /** creation */
            creation: string;
            /** credentialId */
            credentialId: number;
            /** expiration */
            expiration ? : string;
            /** lastUse */
            lastUse ? : string;
            /** States whether this credential has been created by yourself or by the OVH support team */
            ovhSupport: boolean;
            /** rules */
            rules: auth.AccessRule[];
            /** status */
            status: auth.CredentialStateEnum;
        }
        /** API Log */
        export interface Log {
            /** Account which did the Request */
            account: string;
            /** Date of the request */
            date: string;
            /** Source IP of the request */
            ip ? : string;
            /** logId */
            logId: number;
            /** HTTP Method of the request */
            method: http.MethodEnum;
            /** HTTP URI of the request */
            path: string;
            /** API Route called */
            route: string;
        }
    }
    export namespace audit {
        /** An audit Log */
        export interface Log {
            /** authentication details */
            authDetails ? : audit.LogAuthDetails;
            /** event's date */
            createdAt: string;
            /** IP associated to this event */
            ip ? : string;
            /** specific fields for LOGIN_SUCCESS events */
            loginSuccessDetails ? : audit.LogLoginSuccessDetails;
            /** type of event */
            type: audit.LogTypeEnum;
            /** specific fields for USER_PASSWORD_CHANGED events */
            userPasswordChangedDetails ? : audit.LogUserPasswordChangedDetails;
        }
        /** Authentication details */
        export interface LogAuthDetails {
            /** authenticated user details */
            userDetails: audit.LogAuthUserDetails;
        }
        /** Authentication MFA type */
        export enum LogAuthMFATypeEnum {
            "BACKUP_CODE" = "BACKUP_CODE",
            "MAIL" = "MAIL",
            "NONE" = "NONE",
            "SMS" = "SMS",
            "TOTP" = "TOTP",
            "U2F" = "U2F",
            "UNKNOWN" = "UNKNOWN"
        }
        /** Authenticated user details */
        export interface LogAuthUserDetails {
            /** authentication type */
            type: audit.LogAuthUserTypeEnum;
            /** authenticated user name */
            user ? : string;
        }
        /** Authentication type */
        export enum LogAuthUserTypeEnum {
            "ACCOUNT" = "ACCOUNT",
            "PROVIDER" = "PROVIDER",
            "USER" = "USER"
        }
        /** specific fields for LOGIN_SUCCESS events */
        export interface LogLoginSuccessDetails {
            /** Used MFA while login */
            mfaType ? : audit.LogAuthMFATypeEnum;
            /** Browser's user agent */
            userAgent: string;
        }
        /** Audit event type */
        export enum LogTypeEnum {
            "ACCOUNT_PASSWORD_CHANGED" = "ACCOUNT_PASSWORD_CHANGED",
            "LOGIN_SUCCESS" = "LOGIN_SUCCESS",
            "USER_PASSWORD_CHANGED" = "USER_PASSWORD_CHANGED"
        }
        /** specific fields for USER_PASSWORD_CHANGED events */
        export interface LogUserPasswordChangedDetails {
            /** User name */
            user: string;
        }
    }
    export namespace auth {
        /** Access rule allowed to an application */
        export interface AccessRule {
            /** Allowed Method */
            method: auth.HTTPMethodEnum;
            /** Allowed path */
            path: string;
        }
        /** API Application */
        export interface ApiApplication {
            /** ID of this Application */
            applicationId: number;
            /** Key of this application */
            applicationKey: string;
            /** Description of this application */
            description: string;
            /** Name of this application */
            name: string;
            /** Status of this application */
            status: auth.ApplicationStatusEnum;
        }
        /** API Credential */
        export interface ApiCredential {
            /** If defined, list of ip blocks which are allowed to call API with this credential */
            allowedIPs ? : string[];
            /** ID of associated API Application */
            applicationId: number;
            /** Creation date of this credential */
            creation: string;
            /** ID of this credential */
            credentialId: number;
            /** Expiration date of this credential */
            expiration ? : string;
            /** Last use date of this credential */
            lastUse ? : string;
            /** States whether this credential has been created by yourself or by the OVH support team */
            ovhSupport: boolean;
            /** API routes allowed to this credential */
            rules: auth.AccessRule[];
            /** State of to this credential */
            status: auth.CredentialStateEnum;
        }
        /** All states an API Application can be in */
        export enum ApplicationStatusEnum {
            "active" = "active",
            "blocked" = "blocked",
            "inactive" = "inactive",
            "trusted" = "trusted"
        }
        /** All states a Credential can be in */
        export enum CredentialStateEnum {
            "expired" = "expired",
            "pendingValidation" = "pendingValidation",
            "refused" = "refused",
            "validated" = "validated"
        }
        /** All HTTP methods available */
        export enum HTTPMethodEnum {
            "DELETE" = "DELETE",
            "GET" = "GET",
            "POST" = "POST",
            "PUT" = "PUT"
        }
    }
    export namespace billing {
        export namespace ItemDetail {
            /** Order data for this Detail */
            export interface Order {
                /** The meaning of this order detail */
                action ? : billing.ItemDetail.OrderActionEnum;
                /** Configurations chosen during the order */
                configurations: billing.ItemDetail.OrderConfiguration[];
                /** Plan from /order/cart */
                plan: billing.ItemDetail.OrderPlan;
                /** Type of the detail to match with values inside the catalog */
                type ? : billing.ItemDetail.OrderDetailTypeEnum;
            }
            /** List of order actions */
            export enum OrderActionEnum {
                "consumption" = "consumption",
                "detach" = "detach",
                "installation" = "installation",
                "renew" = "renew",
                "revert" = "revert",
                "upgrade" = "upgrade"
            }
            /** Configuration of order */
            export interface OrderConfiguration {
                /** Label of the configuration */
                label: string;
                /** Value of the configuration */
                value: string;
            }
            /** List of order detail types */
            export enum OrderDetailTypeEnum {
                "plan" = "plan",
                "product" = "product"
            }
            /** Plan data from order */
            export interface OrderPlan {
                /** Plan code used when ordering through /order/cart */
                code ? : string;
                /** Duration chosen when ordering through /order/cart (ISO 8601) */
                duration ? : string;
                /** Pricing mode used when ordering through /order/cart */
                pricingMode ? : string;
                /** Product from /order/cart */
                product: billing.ItemDetail.OrderPlanProduct;
                /** Quantity ordered */
                quantity ? : number;
            }
            /** Product data from order */
            export interface OrderPlanProduct {
                /** Name of the product used when ordering through /order/cart */
                name ? : string;
            }
        }
        export namespace credit {
            export namespace balance {
                export namespace movement {
                    /** Movement sub object */
                    export interface SubObject {
                        /** Sub object ID */
                        id ? : string;
                        /** Sub object name */
                        name ? : string;
                    }
                } /** Part of a balance */
                export interface BalanceDetail {
                    /** Balance part amount */
                    amount: order.Price;
                    /** Service ID of this balance part */
                    serviceId ? : long;
                }
                /** Movement already booked on orders */
                export interface BookedMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Order ID */
                    orderId: number;
                }
                /** Movement expiring soon */
                export interface ExpiringMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Movement creation date */
                    creationDate: string;
                    /** Movement expiration date */
                    expirationDate: string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Object source of this credit movement */
                    sourceObject: billing.credit.balance.movement.SubObject;
                }
                /** Credit balance */
                export interface Movement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance name */
                    balanceName: string;
                    /** Movement creation date */
                    creationDate: string;
                    /** Object destination of this credit movement */
                    destinationObject ? : billing.credit.balance.movement.SubObject;
                    /** Movement expiration date */
                    expirationDate ? : string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Movement ID */
                    movementId: number;
                    /** Order ID associated to this credit movement */
                    orderId ? : number;
                    /** Object source of this credit movement */
                    sourceObject: billing.credit.balance.movement.SubObject;
                    /** Movement type */
                    type: string;
                }
                /** Balance type */
                export enum Type {
                    "PREPAID_ACCOUNT" = "PREPAID_ACCOUNT",
                    "VOUCHER" = "VOUCHER",
                    "DEPOSIT" = "DEPOSIT",
                    "BONUS" = "BONUS"
                }
            } /** Credit balance */
            export interface Balance {
                /** Balance amount */
                amount: order.Price;
                /** Balance details, amounts by serviceID */
                balanceDetails: billing.credit.balance.BalanceDetail[];
                /** Balance name */
                balanceName: string;
                /** Movement already booked on orders */
                booked: billing.credit.balance.BookedMovement[];
                /** Balance creation date */
                creationDate: string;
                /** Movement expiring soon */
                expiring: billing.credit.balance.ExpiringMovement[];
                /** Movement expiring soon */
                expiringSummary: billing.credit.balance.ExpiringMovement[];
                /** Balance last update */
                lastUpdate: string;
                /** Balance type */
                type: billing.credit.balance.Type;
            }
        }
        export namespace fidelityAccount {
            /** Operations a fidelity account movement can represent */
            export enum OperationEnum {
                "bonus" = "bonus",
                "cancel-bonus" = "cancel-bonus",
                "cancel-credit" = "cancel-credit",
                "cancel-debit" = "cancel-debit",
                "cancel-pre-debit" = "cancel-pre-debit",
                "credit" = "credit",
                "debit" = "debit",
                "pre-credit" = "pre-credit",
                "pre-debit" = "pre-debit"
            }
        }
        export namespace order {
            export namespace associatedObject {
                /** Type of objects an order can be linked to */
                export enum TypeEnum {
                    "Bill" = "Bill",
                    "Deposit" = "Deposit",
                    "Refund" = "Refund",
                    "ReverseBill" = "ReverseBill",
                    "Withdrawal" = "Withdrawal"
                }
            }
            export namespace followUp {
                /** Step history of order follow-up */
                export interface History {
                    /** History date of order follow-up */
                    date: string;
                    /** History description of order follow-up */
                    description: string;
                    /** History label of order follow-up */
                    label: billing.order.followUp.HistoryStatusEnum;
                }
                /** History label of order follow-up */
                export enum HistoryStatusEnum {
                    "DELIVERY" = "DELIVERY",
                    "FRAUD_CHECK" = "FRAUD_CHECK",
                    "FRAUD_DOCS_REQUESTED" = "FRAUD_DOCS_REQUESTED",
                    "FRAUD_MANUAL_REVIEW" = "FRAUD_MANUAL_REVIEW",
                    "FRAUD_REFUSED" = "FRAUD_REFUSED",
                    "INVOICE_IN_PROGRESS" = "INVOICE_IN_PROGRESS",
                    "INVOICE_SENT" = "INVOICE_SENT",
                    "ORDER_ACCEPTED" = "ORDER_ACCEPTED",
                    "ORDER_STARTED" = "ORDER_STARTED",
                    "PAYMENT_CONFIRMED" = "PAYMENT_CONFIRMED",
                    "PAYMENT_INITIATED" = "PAYMENT_INITIATED",
                    "PAYMENT_RECEIVED" = "PAYMENT_RECEIVED",
                    "REGISTERED_PAYMENT_INITIATED" = "REGISTERED_PAYMENT_INITIATED"
                }
                /** Step status of order follow-up */
                export enum StatusEnum {
                    "DOING" = "DOING",
                    "DONE" = "DONE",
                    "ERROR" = "ERROR",
                    "TODO" = "TODO"
                }
                /** Status of order follow-up */
                export enum StepEnum {
                    "AVAILABLE" = "AVAILABLE",
                    "DELIVERING" = "DELIVERING",
                    "VALIDATED" = "VALIDATED",
                    "VALIDATING" = "VALIDATING"
                }
            }
            export namespace paymentMean {
                /** Parameter to give to a payment page */
                export interface HttpParameter {
                    /** choice */
                    choice ? : billing.order.paymentMean.HttpParameterChoice[];
                    /** name */
                    name: string;
                    /** value */
                    value ? : string;
                }
                /** Choice for an HTTP multi value parameter */
                export interface HttpParameterChoice {
                    /** name */
                    name: string;
                    /** value */
                    value: string;
                }
            } /** The object the processing of the order leaded to */
            export interface AssociatedObject {
                /** id */
                id ? : string;
                /** type */
                type ? : billing.order.associatedObject.TypeEnum;
            }
            /** All data needed to use a payment mean */
            export interface AvailablePaymentMean {
                /** fields */
                fields ? : billing.order.AvailablePaymentMeanField[];
                /** integration */
                integration: billing.order.PaymentMeanIntegrationEnum;
                /** name */
                name: string;
                /** url */
                url ? : string;
            }
            /** All fields needed for a payment mean integration */
            export interface AvailablePaymentMeanField {
                /** key */
                key: string;
                /** options */
                options ? : string[];
                /** type */
                type: billing.order.PaymentMeanFieldTypeEnum;
                /** value */
                value ? : string;
            }
            /** Detailed consumption's retrieval information */
            export interface ConsumptionDetails {
                /** Format of the file */
                fileFormat ? : consumption.ConsumptionExportFormatsEnum;
                /** Temporary URL to download detailed consumption */
                fileURL ? : string;
                /** Request's state description */
                message ? : string;
                /** Consumption details export task's identifier */
                taskId: number;
                /** Consumption details export task's status */
                taskStatus: consumption.ConsumptionExportTaskStatusEnum;
            }
            /** Follow up history of an order */
            export interface FollowUp {
                /** Step history of order follow-up */
                history: billing.order.followUp.History[];
                /** Step status of order follow-up */
                status: billing.order.followUp.StatusEnum;
                /** Step of order follow-up */
                step: billing.order.followUp.StepEnum;
            }
            /** All possible order status */
            export enum OrderStatusEnum {
                "cancelled" = "cancelled",
                "cancelling" = "cancelling",
                "checking" = "checking",
                "delivered" = "delivered",
                "delivering" = "delivering",
                "documentsRequested" = "documentsRequested",
                "notPaid" = "notPaid",
                "unknown" = "unknown"
            }
            /** Pay with payment method parameter */
            export interface PayWithPaymentMethod {
                /** ID of payment method for pay this order */
                id: number;
            }
            /** All data needed to use a payment mean */
            export interface PaymentMean {
                /** fee */
                fee: number;
                /** htmlForm */
                htmlForm ? : string;
                /** httpMethod */
                httpMethod: string;
                /** logo */
                logo ? : string;
                /** parameters */
                parameters: billing.order.paymentMean.HttpParameter[];
                /** subType */
                subType ? : string;
                /** url */
                url: string;
            }
            /** Field type of a payment mean */
            export enum PaymentMeanFieldTypeEnum {
                "hidden" = "hidden",
                "select" = "select",
                "text" = "text"
            }
            /** Integration payment mean type */
            export enum PaymentMeanIntegrationEnum {
                "GET_FORM" = "GET_FORM",
                "POST_FORM" = "POST_FORM",
                "REDIRECT" = "REDIRECT"
            }
            /** TODO */
            export interface PaymentMeans {
                /** creditCard */
                creditCard ? : billing.order.PaymentMean[];
                /** edinar */
                edinar ? : billing.order.PaymentMean[];
                /** fidelityPoints */
                fidelityPoints ? : billing.order.PaymentMean[];
                /** ideal */
                ideal ? : billing.order.PaymentMean[];
                /** multibanco */
                multibanco ? : billing.order.PaymentMean[];
                /** ovhAccount */
                ovhAccount ? : billing.order.PaymentMean[];
                /** paypal */
                paypal ? : billing.order.PaymentMean[];
                /** promotion */
                promotion ? : billing.order.PaymentMean[];
            }
            /** Payment methods */
            export interface PaymentMethods {
                /** Payment method available on this order */
                available: payment.method.AvailablePaymentMethod[];
                /** List of registered Payment methods usable on this order */
                paymentMethods: payment.method.PaymentMethod[];
                /** IDs of registered payment method usable on this order */
                registered: number[];
            }
            /** A registered payment mean */
            export interface RegisteredPaymentMean {
                /** paymentMean */
                paymentMean: billing.ReusablePaymentMeanEnum;
            }
            /** Retraction reason type */
            export enum RetractionReasonEnum {
                "competitor" = "competitor",
                "difficulty" = "difficulty",
                "expensive" = "expensive",
                "other" = "other",
                "performance" = "performance",
                "reliability" = "reliability",
                "unused" = "unused"
            }
        }
        export namespace ovhAccount {
            /** Operations an OVH account movement can represent */
            export enum OperationEnum {
                "cancel-credit" = "cancel-credit",
                "cancel-debit" = "cancel-debit",
                "cancel-pre-debit" = "cancel-pre-debit",
                "credit" = "credit",
                "debit" = "debit",
                "pre-credit" = "pre-credit",
                "pre-debit" = "pre-debit"
            }
        }
        export namespace voucherAccount {
            /** Operations a voucher account movement can represent */
            export enum OperationEnum {
                "cancel-credit" = "cancel-credit",
                "cancel-debit" = "cancel-debit",
                "cancel-pre-debit" = "cancel-pre-debit",
                "credit" = "credit",
                "debit" = "debit",
                "pre-credit" = "pre-credit",
                "pre-debit" = "pre-debit"
            }
        } /** List of available archive types */
        export enum ArchiveTypeEnum {
            "csv" = "csv",
            "zip" = "zip"
        }
        /** Available automatic payment means */
        export interface AutomaticPaymentMean {
            /** Bank Account */
            bankAccount: boolean;
            /** Credit Card */
            creditCard: boolean;
            /** Deferred invoice payment account for authorized customers */
            deferredPaymentAccount: boolean;
            /** Paypal account */
            paypal: boolean;
        }
        /** Details about a Bill */
        export interface Bill {
            /** billId */
            billId: string;
            /** category */
            category: billing.CategoryEnum;
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        export interface BillDetail {
            /** billDetailId */
            billDetailId: string;
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** periodEnd */
            periodEnd ? : string;
            /** periodStart */
            periodStart ? : string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** billing task status */
        export enum BillingTaskStatusEnum {
            "cancelled" = "cancelled",
            "customerError" = "customerError",
            "doing" = "doing",
            "done" = "done",
            "init" = "init",
            "ovhError" = "ovhError",
            "todo" = "todo"
        }
        /** Types of plans */
        export enum CategoryEnum {
            "autorenew" = "autorenew",
            "earlyrenewal" = "earlyrenewal",
            "purchase" = "purchase",
            "purchase-cloud" = "purchase-cloud",
            "purchase-servers" = "purchase-servers",
            "purchase-telecom" = "purchase-telecom",
            "purchase-web" = "purchase-web"
        }
        /** Credit balance applied on an Order */
        export interface CreditBalance {
            /** Amount applied from the balance */
            amount: order.Price;
            /** Credit balance name */
            balanceName: string;
        }
        /** Details about a deposit */
        export interface Deposit {
            /** amount */
            amount: order.Price;
            /** date */
            date: string;
            /** depositId */
            depositId: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** paymentInfo */
            paymentInfo ? : debt.associatedObject.PaymentInfo;
            /** pdfUrl */
            pdfUrl: string;
            /** url */
            url: string;
        }
        /** Information about a Deposit entry */
        export interface DepositDetail {
            /** depositDetailId */
            depositDetailId: string;
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Balance of the fidelity account */
        export interface FidelityAccount {
            /** alertThreshold */
            alertThreshold ? : number;
            /** balance */
            balance: number;
            /** canBeCredited */
            canBeCredited: boolean;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
        }
        /** Details about a fidelity account */
        export interface FidelityMovement {
            /** amount */
            amount: number;
            /** balance */
            balance: number;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.fidelityAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: number;
        }
        /** Extensions of a detail */
        export interface ItemDetail {
            /** order */
            order: billing.ItemDetail.Order;
        }
        /** Status of your manual domain payment migration */
        export interface ManualDomainPaymentStatus {
            /** Total number of domains that needs to be migrated to manual renew mode */
            domainsToMigrate ? : number;
            /** Total number of domains successfully migrated to manual renew mode */
            migratedDomains ? : number;
            /** status */
            status: billing.BillingTaskStatusEnum;
        }
        /** Details about an OVH account */
        export interface Movement {
            /** amount */
            amount: order.Price;
            /** balance */
            balance: order.Price;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.ovhAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: order.Price;
            /** retrievableAmount */
            retrievableAmount: order.Price;
        }
        /** Details about an Order */
        export interface Order {
            /** date */
            date ? : string;
            /** expirationDate */
            expirationDate ? : string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** retractionDate */
            retractionDate ? : string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        export interface OrderDetail {
            /** cancelled */
            cancelled: boolean;
            /** description */
            description: string;
            /** detailType */
            detailType ? : order.OrderDetailTypeEnum;
            /** domain */
            domain: string;
            /** orderDetailId */
            orderDetailId: number;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Details about an OVH account */
        export interface OvhAccount {
            /** alertThreshold */
            alertThreshold ? : number;
            /** balance */
            balance: order.Price;
            /** canBeCredited */
            canBeCredited: boolean;
            /** isActive */
            isActive: boolean;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
            /** ovhAccountId */
            ovhAccountId: string;
        }
        /** Details about a payment */
        export interface Payment {
            /** paymentDate */
            paymentDate: string;
            /** paymentIdentifier */
            paymentIdentifier ? : string;
            /** paymentType */
            paymentType: billing.PaymentMeanEnum;
        }
        /** All payment means you might have use on an OVH order */
        export enum PaymentMeanEnum {
            "cash" = "cash",
            "chargeback" = "chargeback",
            "check" = "check",
            "cheque" = "cheque",
            "creditAccount" = "creditAccount",
            "creditCard" = "creditCard",
            "debtAccount" = "debtAccount",
            "deposit" = "deposit",
            "digitalLaunchPad" = "digitalLaunchPad",
            "edinar" = "edinar",
            "fidelityPoints" = "fidelityPoints",
            "free" = "free",
            "ideal" = "ideal",
            "incubatorAccount" = "incubatorAccount",
            "mandat" = "mandat",
            "multibanco" = "multibanco",
            "none" = "none",
            "ovhAccount" = "ovhAccount",
            "paymentMandate" = "paymentMandate",
            "paypal" = "paypal",
            "payu" = "payu",
            "platnosci" = "platnosci",
            "refund" = "refund",
            "rupay" = "rupay",
            "transfer" = "transfer",
            "withdrawal" = "withdrawal"
        }
        /** Details about a Refund */
        export interface Refund {
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** originalBillId */
            originalBillId ? : string;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** refundId */
            refundId: string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** Information about a Bill entry */
        export interface RefundDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** reference */
            reference: string;
            /** refundDetailId */
            refundDetailId: string;
            /** refundId */
            refundId: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Reusable payment mean type */
        export enum ReusablePaymentMeanEnum {
            "CREDIT_CARD" = "CREDIT_CARD",
            "CURRENT_ACCOUNT" = "CURRENT_ACCOUNT",
            "DEFERRED_PAYMENT_ACCOUNT" = "DEFERRED_PAYMENT_ACCOUNT",
            "DOMESTIC_CARD" = "DOMESTIC_CARD",
            "ENTERPRISE" = "ENTERPRISE",
            "INTERNAL_TRUSTED_ACCOUNT" = "INTERNAL_TRUSTED_ACCOUNT",
            "PAYPAL" = "PAYPAL",
            "RUPAY" = "RUPAY",
            "SEPA_DIRECT_DEBIT" = "SEPA_DIRECT_DEBIT",
            "bankAccount" = "bankAccount",
            "creditCard" = "creditCard",
            "deferredPaymentAccount" = "deferredPaymentAccount",
            "fidelityAccount" = "fidelityAccount",
            "ovhAccount" = "ovhAccount",
            "paypal" = "paypal"
        }
        /** Information about withdrawal entry */
        export interface ReversableBillDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** reference */
            reference: string;
            /** reverseBillDetailId */
            reverseBillDetailId: string;
            /** reverseBillId */
            reverseBillId: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
        }
        /** Details about a bill from customer */
        export interface ReverseBill {
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** priceWithTax */
            priceWithTax: order.Price;
            /** priceWithoutTax */
            priceWithoutTax: order.Price;
            /** reverseBillId */
            reverseBillId: string;
            /** tax */
            tax: order.Price;
            /** url */
            url: string;
        }
        /** SLA properties */
        export interface SlaOperation {
            /** Date of the event that led to SLA */
            date: string;
            /** Description of the SLA operation for this incident */
            description: string;
            /** Date of the end of the SLA */
            endDate ? : string;
            /** SLA identifier */
            id: number;
            /** Sla operation name */
            name: string;
            /** Date of the start of the SLA */
            startDate: string;
        }
        /** Describe all services impacted by SLA */
        export interface SlaOperationService {
            /** Service description */
            description: string;
            /** Impacted service name */
            serviceName: string;
            /** SLA plan application */
            slaApplication: string;
            /** SLA plan description */
            slaPlan: string;
        }
        /** Details about a Voucher account */
        export interface VoucherAccount {
            /** balance */
            balance: order.Price;
            /** lastUpdate */
            lastUpdate: string;
            /** openDate */
            openDate: string;
            /** voucherAccountId */
            voucherAccountId: string;
        }
        /** Details about a voucher account */
        export interface VoucherMovement {
            /** amount */
            amount: order.Price;
            /** balance */
            balance: order.Price;
            /** date */
            date: string;
            /** description */
            description: string;
            /** movementId */
            movementId: number;
            /** operation */
            operation: billing.voucherAccount.OperationEnum;
            /** order */
            order: number;
            /** previousBalance */
            previousBalance: order.Price;
        }
        /** Details about a withdrawal */
        export interface Withdrawal {
            /** amount */
            amount: order.Price;
            /** country */
            country: string;
            /** date */
            date: string;
            /** orderId */
            orderId: number;
            /** password */
            password: string;
            /** pdfUrl */
            pdfUrl: string;
            /** url */
            url: string;
            /** withdrawalId */
            withdrawalId: string;
        }
        /** Information about a Withdrawal entry */
        export interface WithdrawalDetail {
            /** description */
            description: string;
            /** domain */
            domain: string;
            /** quantity */
            quantity: string;
            /** totalPrice */
            totalPrice: order.Price;
            /** unitPrice */
            unitPrice: order.Price;
            /** withdrawalDetailId */
            withdrawalDetailId: string;
        }
    }
    export namespace carbonCalculator {
        export namespace Task {
            /** Status of a calculation task */
            export enum TaskStatusEnum {
                "ERROR" = "ERROR",
                "IN_PROGRESS" = "IN_PROGRESS",
                "SUCCESS" = "SUCCESS"
            }
        } /** Request body for the calculation of customer's carbon impact */
        export interface CalculationRequest {
            /** Month of the requested document (day is ignored) */
            date: string;
        }
        /** Response for request of customer's carbon impact */
        export interface CalculationResponse {
            /** ID of the calculation task */
            taskID: string;
        }
        /** Task to generate a carbon impact document */
        export interface Task {
            /** Link to the document */
            link ? : string;
            /** Status of the task */
            status: carbonCalculator.Task.TaskStatusEnum;
            /** ID of the task */
            taskID: string;
        }
    }
    export namespace consumption {
        /** Export file format */
        export enum ConsumptionExportFormatsEnum {
            "csv" = "csv"
        }
        /** Export task status */
        export enum ConsumptionExportTaskStatusEnum {
            "DOING" = "DOING",
            "DONE" = "DONE",
            "ERROR" = "ERROR",
            "TODO" = "TODO"
        }
    }
    export namespace contact {
        /** Representation of an Address */
        export interface Address {
            /** City */
            city: string;
            /** Country */
            country: nichandle.CountryEnum;
            /** First line of the address */
            line1: string;
            /** Second line of the address */
            line2 ? : string;
            /** Third line of the address */
            line3 ? : string;
            /** Others details */
            otherDetails ? : string;
            /** Province name */
            province ? : string;
            /** Zipcode */
            zip: string;
        }
        /** Representation of a Contact */
        export interface Contact {
            /** Address for this contact */
            address: contact.Address;
            /** Birth city */
            birthCity ? : string;
            /** Birth Country */
            birthCountry ? : nichandle.CountryEnum;
            /** Birth date */
            birthDay ? : string;
            /** Birth Zipcode */
            birthZip ? : string;
            /** Cellphone number */
            cellPhone ? : string;
            /** National identification number of your company */
            companyNationalIdentificationNumber ? : string;
            /** Email address */
            email: string;
            /** Fax number */
            fax ? : string;
            /** First name */
            firstName: string;
            /** Gender */
            gender ? : nichandle.GenderEnum;
            /** Contact Identifier */
            id: number;
            /** Language */
            language: nichandle.LanguageEnum;
            /** Last name */
            lastName: string;
            /** Legal form of the contact */
            legalForm: nichandle.LegalFormEnum;
            /** National identification number of the contact */
            nationalIdentificationNumber ? : string;
            /** Nationality */
            nationality ? : nichandle.CountryEnum;
            /** Organisation name */
            organisationName ? : string;
            /** Organisation type */
            organisationType ? : string;
            /** Telephone number */
            phone ? : string;
            /** Spare email address */
            spareEmail ? : string;
            /** VAT number */
            vat ? : string;
        }
        /** Extras informations about a field */
        export interface FieldInformation {
            /** Name of the field concerned by restrictions */
            fieldName: string;
            /** Indicates if the field is mandatory when editing */
            mandatory: boolean;
            /** Indicates if the field can't be edited */
            readOnly: boolean;
        }
    }
    export namespace debt {
        export namespace associatedObject {
            /** The payment infos linked to this debt entry */
            export interface PaymentInfo {
                /** Optional customer description */
                description ? : string;
                /** Payment mean used for this debt operation */
                paymentType: billing.PaymentMeanEnum;
                /** Public payment mean label */
                publicLabel ? : string;
            }
            /** Type of objects an order can be linked to */
            export enum TypeEnum {
                "Bill" = "Bill",
                "DebtOperation" = "DebtOperation",
                "Deposit" = "Deposit",
                "Order" = "Order",
                "OvhAccountMovement" = "OvhAccountMovement",
                "Refund" = "Refund",
                "Withdrawal" = "Withdrawal"
            }
        }
        export namespace entry {
            /** The object linked to this debt entry */
            export interface AssociatedObject {
                /** id */
                id ? : string;
                /** paymentInfo */
                paymentInfo ? : debt.associatedObject.PaymentInfo;
                /** subId */
                subId ? : string;
                /** type */
                type ? : debt.associatedObject.TypeEnum;
            }
            /** All operations a debt entry can represent */
            export enum OperationEnum {
                "BANK_TRANSFER_MANUAL" = "BANK_TRANSFER_MANUAL",
                "CANCEL" = "CANCEL",
                "CASH_MANUAL" = "CASH_MANUAL",
                "CHECK_MANUAL" = "CHECK_MANUAL",
                "CREDITCARD" = "CREDITCARD",
                "CREDITCARD_AUTOMATIC" = "CREDITCARD_AUTOMATIC",
                "CREDITCARD_MANUAL" = "CREDITCARD_MANUAL",
                "CREDIT_ACCOUNT_AUTOMATIC" = "CREDIT_ACCOUNT_AUTOMATIC",
                "CREDIT_CARD_AUTOMATIC" = "CREDIT_CARD_AUTOMATIC",
                "CREDIT_CARD_MANUAL" = "CREDIT_CARD_MANUAL",
                "CURRENT_ACCOUNT_AUTOMATIC" = "CURRENT_ACCOUNT_AUTOMATIC",
                "CURRENT_ACCOUNT_MANUAL" = "CURRENT_ACCOUNT_MANUAL",
                "DOMESTIC_CARD_AUTOMATIC" = "DOMESTIC_CARD_AUTOMATIC",
                "DOMESTIC_CARD_MANUAL" = "DOMESTIC_CARD_MANUAL",
                "EDINAR_MANUAL" = "EDINAR_MANUAL",
                "ENTERPRISE_AUTOMATIC" = "ENTERPRISE_AUTOMATIC",
                "ENTERPRISE_MANUAL" = "ENTERPRISE_MANUAL",
                "IDEAL_AUTOMATIC" = "IDEAL_AUTOMATIC",
                "IDEAL_MANUAL" = "IDEAL_MANUAL",
                "INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC" = "INTERNAL_TRUSTED_ACCOUNT_AUTOMATIC",
                "INTERNAL_TRUSTED_ACCOUNT_MANUAL" = "INTERNAL_TRUSTED_ACCOUNT_MANUAL",
                "MULTIBANCO_AUTOMATIC" = "MULTIBANCO_AUTOMATIC",
                "MULTIBANCO_MANUAL" = "MULTIBANCO_MANUAL",
                "ORDER" = "ORDER",
                "PAYPAL_AUTOMATIC" = "PAYPAL_AUTOMATIC",
                "PAYPAL_MANUAL" = "PAYPAL_MANUAL",
                "PAYU_AUTOMATIC" = "PAYU_AUTOMATIC",
                "PAYU_MANUAL" = "PAYU_MANUAL",
                "RECOVERY_TRANSFER_AUTOMATIC" = "RECOVERY_TRANSFER_AUTOMATIC",
                "REFUND" = "REFUND",
                "REFUND_CHECK" = "REFUND_CHECK",
                "REFUND_CREDITCARD" = "REFUND_CREDITCARD",
                "REFUND_CREDIT_ACCOUNT" = "REFUND_CREDIT_ACCOUNT",
                "REFUND_CREDIT_CARD" = "REFUND_CREDIT_CARD",
                "REFUND_CURRENT_ACCOUNT" = "REFUND_CURRENT_ACCOUNT",
                "REFUND_DOMESTIC_CARD" = "REFUND_DOMESTIC_CARD",
                "REFUND_ENTERPRISE" = "REFUND_ENTERPRISE",
                "REFUND_IDEAL" = "REFUND_IDEAL",
                "REFUND_INTERNAL_TRUSTED_ACCOUNT" = "REFUND_INTERNAL_TRUSTED_ACCOUNT",
                "REFUND_LOSS" = "REFUND_LOSS",
                "REFUND_MULTIBANCO" = "REFUND_MULTIBANCO",
                "REFUND_PAYPAL" = "REFUND_PAYPAL",
                "REFUND_PAYU" = "REFUND_PAYU",
                "REFUND_RUPAY" = "REFUND_RUPAY",
                "REFUND_SEPA" = "REFUND_SEPA",
                "REFUND_SEPA_DIRECT_DEBIT" = "REFUND_SEPA_DIRECT_DEBIT",
                "REFUND_TRANSFER" = "REFUND_TRANSFER",
                "REFUND_UNKNOWN" = "REFUND_UNKNOWN",
                "RUPAY_AUTOMATIC" = "RUPAY_AUTOMATIC",
                "RUPAY_MANUAL" = "RUPAY_MANUAL",
                "SEPA_AUTOMATIC" = "SEPA_AUTOMATIC",
                "SEPA_DIRECT_DEBIT_AUTOMATIC" = "SEPA_DIRECT_DEBIT_AUTOMATIC",
                "SEPA_DIRECT_DEBIT_MANUAL" = "SEPA_DIRECT_DEBIT_MANUAL",
                "TRANSFER_MANUAL" = "TRANSFER_MANUAL",
                "UNPAID_CHECK" = "UNPAID_CHECK",
                "UNPAID_CREDITCARD" = "UNPAID_CREDITCARD",
                "UNPAID_CREDIT_ACCOUNT" = "UNPAID_CREDIT_ACCOUNT",
                "UNPAID_CREDIT_CARD" = "UNPAID_CREDIT_CARD",
                "UNPAID_CURRENT_ACCOUNT" = "UNPAID_CURRENT_ACCOUNT",
                "UNPAID_DOMESTIC_CARD" = "UNPAID_DOMESTIC_CARD",
                "UNPAID_ENTERPRISE" = "UNPAID_ENTERPRISE",
                "UNPAID_IDEAL" = "UNPAID_IDEAL",
                "UNPAID_INTERNAL_TRUSTED_ACCOUNT" = "UNPAID_INTERNAL_TRUSTED_ACCOUNT",
                "UNPAID_MULTIBANCO" = "UNPAID_MULTIBANCO",
                "UNPAID_PAYPAL" = "UNPAID_PAYPAL",
                "UNPAID_PAYU" = "UNPAID_PAYU",
                "UNPAID_RUPAY" = "UNPAID_RUPAY",
                "UNPAID_SEPA" = "UNPAID_SEPA",
                "UNPAID_SEPA_DIRECT_DEBIT" = "UNPAID_SEPA_DIRECT_DEBIT",
                "UNPAID_WITHDRAW" = "UNPAID_WITHDRAW",
                "WARRANT_MANUAL" = "WARRANT_MANUAL",
                "WITHDRAW_AUTOMATIC" = "WITHDRAW_AUTOMATIC"
            }
            /** All status a debt HistoryOrder entry can be in */
            export enum StatusDebtOrderEnum {
                "PAID" = "PAID",
                "REFUNDED" = "REFUNDED",
                "TO_BE_PAID" = "TO_BE_PAID",
                "UNMATURED" = "UNMATURED",
                "UNPAID" = "UNPAID"
            }
            /** All status a debt entry can be in */
            export enum StatusEnum {
                "CANCELLED" = "CANCELLED",
                "DONE" = "DONE",
                "FAILED" = "FAILED",
                "PAID" = "PAID",
                "PENDING" = "PENDING",
                "TODO" = "TODO"
            }
        } /** Debt balance of the account */
        export interface Balance {
            /** active */
            active: boolean;
            /** Amount of debts the account has */
            dueAmount: order.Price;
            /** Amount currently being processed */
            pendingAmount: order.Price;
            /** Reserved amount awaiting payment */
            todoAmount: order.Price;
            /** Unmatured amount for deferred payment term */
            unmaturedAmount: order.Price;
        }
        /** State of a debt */
        export interface Debt {
            /** Original amount of the debt */
            amount: order.Price;
            /** Date the debt was created on */
            date: string;
            /** debtId */
            debtId: number;
            /** Amount you still owe for that debt */
            dueAmount: order.Price;
            /** If specified, the debt will not be recovered before that date */
            dueDate ? : string;
            /** The order the debt relates to */
            orderId: number;
            /** Amount currently being processed */
            pendingAmount: order.Price;
            /** Status of a debt */
            status: debt.entry.StatusDebtOrderEnum;
            /** Reserved amount awaiting payment */
            todoAmount: order.Price;
            /** Unmatured amount for deferred payment term */
            unmaturedAmount: order.Price;
        }
        /** Operation that happend on a debt */
        export interface Operation {
            /** Amount of the operation */
            amount: order.Price;
            /** Date the operation took place on */
            date: string;
            /** Order id associated to the deposit */
            depositOrderId: number;
            /** operationId */
            operationId: number;
            /** Status of the operation */
            status: debt.entry.StatusEnum;
            /** Type of movement this operation represents */
            type ? : debt.entry.OperationEnum;
        }
    }
    export namespace dedicated {
        export namespace installationTemplate {
            /** Available installation templates */
            export interface Templates {
                /** list of all language available for this template */
                availableLanguages: dedicated.TemplateOsLanguageEnum[];
                /** this template bit format */
                bitFormat: dedicated.server.BitFormatEnum;
                /** category of this template (informative only) */
                category: dedicated.TemplateOsUsageEnum;
                /** Customizable template properties  */
                customization ? : dedicated.TemplateOsProperties;
                /** the default language of this template */
                defaultLanguage: dedicated.TemplateOsLanguageEnum;
                /** information about this template */
                description: string;
                /** the distribution this template is based on */
                distribution: string;
                /** after this date, install of this template will not be possible at OVH */
                endOfInstall: string;
                /** this template family type */
                family: dedicated.TemplateOsTypeEnum;
                /** list of all filesystems available for this template */
                filesystems: dedicated.server.FileSystemEnum[];
                /** This distribution supports hardware raid configuration through the OVH API */
                hardRaidConfiguration ? : boolean;
                /** Inputs */
                inputs ? : dedicated.TemplateOsInput[];
                /** This distribution licensing details */
                license ? : dedicated.TemplateOsInfoLicense;
                /** This distribution supports Logical Volumes (Linux LVM) */
                lvmReady ? : boolean;
                /** Partitioning customization is not available for this OS template */
                noPartitioning: boolean;
                /** This distribution project details */
                project ? : dedicated.TemplateOsInfoProject;
                /** Partitioning customization is available but limited to mirroring for this OS template */
                softRaidOnlyMirroring: boolean;
                /** this template subfamily type */
                subfamily: dedicated.TemplateOsSubfamilyEnum;
                /** This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel */
                supportsDistributionKernel ? : boolean;
                /** This distribution supports RTM software */
                supportsRTM: boolean;
                /** This template name */
                templateName: string;
            }
            /** Hardware RAID defined in this partitioning scheme */
            export interface hardwareRaid {
                /** Disk list */
                disks: string[];
                /** RAID mode */
                mode: dedicated.TemplateOsHardwareRaidEnum;
                /** Hardware RAID name */
                name: string;
                /** Specifies the creation order of the hardware RAID */
                step: number;
            }
            /** Partitioning schemes available on this template */
            export interface templatePartitioningSchemes {
                /** This partitioning scheme name */
                name: string;
                /** on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications) */
                priority: number;
            }
            /**  Partitions defined in this partitioning scheme */
            export interface templatePartitions {
                /** Partition filesytem */
                filesystem: dedicated.server.FileSystemEnum;
                /** Partition mount point */
                mountpoint: string;
                /** specifies the creation order of the partition on the disk */
                order: number;
                /** Partition raid */
                raid ? : dedicated.server.PartitionRaidEnum;
                /** Partition size (unit: MB GB TB, MB by default), 0 => rest of the space */
                size: complexType.UnitAndValue < long > ;
                /** Partition type */
                type: dedicated.TemplatePartitionTypeEnum;
                /** Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS */
                volumeName ? : string;
            }
        }
        export namespace server {
            /** Available os bit format */
            export enum BitFormatEnum {
                "32" = "32",
                "64" = "64"
            }
            /** FileSystems */
            export enum FileSystemEnum {
                "btrfs" = "btrfs",
                "ext3" = "ext3",
                "ext4" = "ext4",
                "fat16" = "fat16",
                "none" = "none",
                "ntfs" = "ntfs",
                "reiserfs" = "reiserfs",
                "swap" = "swap",
                "ufs" = "ufs",
                "vmfs5" = "vmfs5",
                "vmfs6" = "vmfs6",
                "vmfsl" = "vmfsl",
                "xfs" = "xfs",
                "zfs" = "zfs"
            }
            /** partition raid type */
            export enum PartitionRaidEnum {
                "0" = "0",
                "1" = "1",
                "10" = "10",
                "5" = "5",
                "6" = "6",
                "7" = "7"
            }
        } /** Hardware RAID enum */
        export enum TemplateOsHardwareRaidEnum {
            "raid0" = "raid0",
            "raid1" = "raid1",
            "raid10" = "raid10",
            "raid5" = "raid5",
            "raid50" = "raid50",
            "raid6" = "raid6",
            "raid60" = "raid60"
        }
        /** A structure describing some interesting facts about an OS template licensing */
        export interface TemplateOsInfoLicense {
            /** OS template license OS details */
            os ? : dedicated.TemplateOsInfoLicenseItem;
            /** OS template license usage details */
            usage ? : dedicated.TemplateOsInfoLicenseItem;
        }
        /** A structure describing some interesting facts about an OS template license item */
        export interface TemplateOsInfoLicenseItem {
            /** OS template license item names */
            name ? : dedicated.TemplateOsInfoLicenseItemEnum[];
            /** OS template license item url */
            url ? : string;
        }
        /** Standard license name according to SPDX */
        export enum TemplateOsInfoLicenseItemEnum {
            "0BSD" = "0BSD",
            "AAL" = "AAL",
            "ADSL" = "ADSL",
            "AFL-1.1" = "AFL-1.1",
            "AFL-1.2" = "AFL-1.2",
            "AFL-2.0" = "AFL-2.0",
            "AFL-2.1" = "AFL-2.1",
            "AFL-3.0" = "AFL-3.0",
            "AGPL-1.0-only" = "AGPL-1.0-only",
            "AGPL-1.0-or-later" = "AGPL-1.0-or-later",
            "AGPL-3.0-only" = "AGPL-3.0-only",
            "AGPL-3.0-or-later" = "AGPL-3.0-or-later",
            "AMDPLPA" = "AMDPLPA",
            "AML" = "AML",
            "AMPAS" = "AMPAS",
            "ANTLR-PD" = "ANTLR-PD",
            "ANTLR-PD-fallback" = "ANTLR-PD-fallback",
            "APAFML" = "APAFML",
            "APL-1.0" = "APL-1.0",
            "APSL-1.0" = "APSL-1.0",
            "APSL-1.1" = "APSL-1.1",
            "APSL-1.2" = "APSL-1.2",
            "APSL-2.0" = "APSL-2.0",
            "Abstyles" = "Abstyles",
            "Adobe-2006" = "Adobe-2006",
            "Adobe-Glyph" = "Adobe-Glyph",
            "Afmparse" = "Afmparse",
            "Aladdin" = "Aladdin",
            "Apache-1.0" = "Apache-1.0",
            "Apache-1.1" = "Apache-1.1",
            "Apache-2.0" = "Apache-2.0",
            "Artistic-1.0" = "Artistic-1.0",
            "Artistic-1.0-Perl" = "Artistic-1.0-Perl",
            "Artistic-1.0-cl8" = "Artistic-1.0-cl8",
            "Artistic-2.0" = "Artistic-2.0",
            "BSD-1-Clause" = "BSD-1-Clause",
            "BSD-2-Clause" = "BSD-2-Clause",
            "BSD-2-Clause-Patent" = "BSD-2-Clause-Patent",
            "BSD-2-Clause-Views" = "BSD-2-Clause-Views",
            "BSD-3-Clause" = "BSD-3-Clause",
            "BSD-3-Clause-Attribution" = "BSD-3-Clause-Attribution",
            "BSD-3-Clause-Clear" = "BSD-3-Clause-Clear",
            "BSD-3-Clause-LBNL" = "BSD-3-Clause-LBNL",
            "BSD-3-Clause-Modification" = "BSD-3-Clause-Modification",
            "BSD-3-Clause-No-Nuclear-License" = "BSD-3-Clause-No-Nuclear-License",
            "BSD-3-Clause-No-Nuclear-License-2014" = "BSD-3-Clause-No-Nuclear-License-2014",
            "BSD-3-Clause-No-Nuclear-Warranty" = "BSD-3-Clause-No-Nuclear-Warranty",
            "BSD-3-Clause-Open-MPI" = "BSD-3-Clause-Open-MPI",
            "BSD-4-Clause" = "BSD-4-Clause",
            "BSD-4-Clause-Shortened" = "BSD-4-Clause-Shortened",
            "BSD-4-Clause-UC" = "BSD-4-Clause-UC",
            "BSD-Protection" = "BSD-Protection",
            "BSD-Source-Code" = "BSD-Source-Code",
            "BSL-1.0" = "BSL-1.0",
            "BUSL-1.1" = "BUSL-1.1",
            "Bahyph" = "Bahyph",
            "Barr" = "Barr",
            "Beerware" = "Beerware",
            "BitTorrent-1.0" = "BitTorrent-1.0",
            "BitTorrent-1.1" = "BitTorrent-1.1",
            "BlueOak-1.0.0" = "BlueOak-1.0.0",
            "Borceux" = "Borceux",
            "C-UDA-1.0" = "C-UDA-1.0",
            "CAL-1.0" = "CAL-1.0",
            "CAL-1.0-Combined-Work-Exception" = "CAL-1.0-Combined-Work-Exception",
            "CATOSL-1.1" = "CATOSL-1.1",
            "CC-BY-1.0" = "CC-BY-1.0",
            "CC-BY-2.0" = "CC-BY-2.0",
            "CC-BY-2.5" = "CC-BY-2.5",
            "CC-BY-3.0" = "CC-BY-3.0",
            "CC-BY-4.0" = "CC-BY-4.0",
            "CC-BY-NC-1.0" = "CC-BY-NC-1.0",
            "CC-BY-NC-2.0" = "CC-BY-NC-2.0",
            "CC-BY-NC-2.5" = "CC-BY-NC-2.5",
            "CC-BY-NC-3.0" = "CC-BY-NC-3.0",
            "CC-BY-NC-4.0" = "CC-BY-NC-4.0",
            "CC-BY-NC-ND-1.0" = "CC-BY-NC-ND-1.0",
            "CC-BY-NC-ND-2.0" = "CC-BY-NC-ND-2.0",
            "CC-BY-NC-ND-2.5" = "CC-BY-NC-ND-2.5",
            "CC-BY-NC-ND-3.0" = "CC-BY-NC-ND-3.0",
            "CC-BY-NC-ND-4.0" = "CC-BY-NC-ND-4.0",
            "CC-BY-NC-SA-1.0" = "CC-BY-NC-SA-1.0",
            "CC-BY-NC-SA-2.0" = "CC-BY-NC-SA-2.0",
            "CC-BY-NC-SA-2.5" = "CC-BY-NC-SA-2.5",
            "CC-BY-NC-SA-3.0" = "CC-BY-NC-SA-3.0",
            "CC-BY-NC-SA-4.0" = "CC-BY-NC-SA-4.0",
            "CC-BY-ND-1.0" = "CC-BY-ND-1.0",
            "CC-BY-ND-2.0" = "CC-BY-ND-2.0",
            "CC-BY-ND-2.5" = "CC-BY-ND-2.5",
            "CC-BY-ND-3.0" = "CC-BY-ND-3.0",
            "CC-BY-ND-4.0" = "CC-BY-ND-4.0",
            "CC-BY-SA-1.0" = "CC-BY-SA-1.0",
            "CC-BY-SA-2.0" = "CC-BY-SA-2.0",
            "CC-BY-SA-2.5" = "CC-BY-SA-2.5",
            "CC-BY-SA-3.0" = "CC-BY-SA-3.0",
            "CC-BY-SA-4.0" = "CC-BY-SA-4.0",
            "CC-PDDC" = "CC-PDDC",
            "CC0-1.0" = "CC0-1.0",
            "CDDL-1.0" = "CDDL-1.0",
            "CDDL-1.1" = "CDDL-1.1",
            "CDLA-Permissive-1.0" = "CDLA-Permissive-1.0",
            "CDLA-Sharing-1.0" = "CDLA-Sharing-1.0",
            "CECILL-1.0" = "CECILL-1.0",
            "CECILL-1.1" = "CECILL-1.1",
            "CECILL-2.0" = "CECILL-2.0",
            "CECILL-2.1" = "CECILL-2.1",
            "CECILL-B" = "CECILL-B",
            "CECILL-C" = "CECILL-C",
            "CERN-OHL-1.1" = "CERN-OHL-1.1",
            "CERN-OHL-1.2" = "CERN-OHL-1.2",
            "CERN-OHL-P-2.0" = "CERN-OHL-P-2.0",
            "CERN-OHL-S-2.0" = "CERN-OHL-S-2.0",
            "CERN-OHL-W-2.0" = "CERN-OHL-W-2.0",
            "CNRI-Jython" = "CNRI-Jython",
            "CNRI-Python" = "CNRI-Python",
            "CNRI-Python-GPL-Compatible" = "CNRI-Python-GPL-Compatible",
            "CPAL-1.0" = "CPAL-1.0",
            "CPL-1.0" = "CPL-1.0",
            "CPOL-1.02" = "CPOL-1.02",
            "CUA-OPL-1.0" = "CUA-OPL-1.0",
            "Caldera" = "Caldera",
            "ClArtistic" = "ClArtistic",
            "Condor-1.1" = "Condor-1.1",
            "Crossword" = "Crossword",
            "CrystalStacker" = "CrystalStacker",
            "Cube" = "Cube",
            "D-FSL-1.0" = "D-FSL-1.0",
            "DFSG" = "DFSG",
            "DOC" = "DOC",
            "DRL-1.0" = "DRL-1.0",
            "DSDP" = "DSDP",
            "Dotseqn" = "Dotseqn",
            "ECL-1.0" = "ECL-1.0",
            "ECL-2.0" = "ECL-2.0",
            "EFL-1.0" = "EFL-1.0",
            "EFL-2.0" = "EFL-2.0",
            "EPICS" = "EPICS",
            "EPL-1.0" = "EPL-1.0",
            "EPL-2.0" = "EPL-2.0",
            "EUDatagrid" = "EUDatagrid",
            "EUPL-1.0" = "EUPL-1.0",
            "EUPL-1.1" = "EUPL-1.1",
            "EUPL-1.2" = "EUPL-1.2",
            "Entessa" = "Entessa",
            "ErlPL-1.1" = "ErlPL-1.1",
            "Eurosym" = "Eurosym",
            "FSFAP" = "FSFAP",
            "FSFUL" = "FSFUL",
            "FSFULLR" = "FSFULLR",
            "FTL" = "FTL",
            "Fair" = "Fair",
            "Frameworx-1.0" = "Frameworx-1.0",
            "FreeBSD-DOC" = "FreeBSD-DOC",
            "FreeImage" = "FreeImage",
            "GD" = "GD",
            "GFDL-1.1-invariants-only" = "GFDL-1.1-invariants-only",
            "GFDL-1.1-invariants-or-later" = "GFDL-1.1-invariants-or-later",
            "GFDL-1.1-no-invariants-only" = "GFDL-1.1-no-invariants-only",
            "GFDL-1.1-no-invariants-or-later" = "GFDL-1.1-no-invariants-or-later",
            "GFDL-1.1-only" = "GFDL-1.1-only",
            "GFDL-1.1-or-later" = "GFDL-1.1-or-later",
            "GFDL-1.2-invariants-only" = "GFDL-1.2-invariants-only",
            "GFDL-1.2-invariants-or-later" = "GFDL-1.2-invariants-or-later",
            "GFDL-1.2-no-invariants-only" = "GFDL-1.2-no-invariants-only",
            "GFDL-1.2-no-invariants-or-later" = "GFDL-1.2-no-invariants-or-later",
            "GFDL-1.2-only" = "GFDL-1.2-only",
            "GFDL-1.2-or-later" = "GFDL-1.2-or-later",
            "GFDL-1.3-invariants-only" = "GFDL-1.3-invariants-only",
            "GFDL-1.3-invariants-or-later" = "GFDL-1.3-invariants-or-later",
            "GFDL-1.3-no-invariants-only" = "GFDL-1.3-no-invariants-only",
            "GFDL-1.3-no-invariants-or-later" = "GFDL-1.3-no-invariants-or-later",
            "GFDL-1.3-only" = "GFDL-1.3-only",
            "GFDL-1.3-or-later" = "GFDL-1.3-or-later",
            "GL2PS" = "GL2PS",
            "GLWTPL" = "GLWTPL",
            "GPL-1.0-only" = "GPL-1.0-only",
            "GPL-1.0-or-later" = "GPL-1.0-or-later",
            "GPL-2.0-only" = "GPL-2.0-only",
            "GPL-2.0-or-later" = "GPL-2.0-or-later",
            "GPL-3.0-only" = "GPL-3.0-only",
            "GPL-3.0-or-later" = "GPL-3.0-or-later",
            "Giftware" = "Giftware",
            "Glide" = "Glide",
            "Glulxe" = "Glulxe",
            "HPND" = "HPND",
            "HPND-sell-variant" = "HPND-sell-variant",
            "HTMLTIDY" = "HTMLTIDY",
            "HaskellReport" = "HaskellReport",
            "Hippocratic-2.1" = "Hippocratic-2.1",
            "IBM-pibs" = "IBM-pibs",
            "ICU" = "ICU",
            "IJG" = "IJG",
            "IPA" = "IPA",
            "IPL-1.0" = "IPL-1.0",
            "ISC" = "ISC",
            "ImageMagick" = "ImageMagick",
            "Imlib2" = "Imlib2",
            "Info-ZIP" = "Info-ZIP",
            "Intel" = "Intel",
            "Intel-ACPI" = "Intel-ACPI",
            "Interbase-1.0" = "Interbase-1.0",
            "JPNIC" = "JPNIC",
            "JSON" = "JSON",
            "JasPer-2.0" = "JasPer-2.0",
            "LAL-1.2" = "LAL-1.2",
            "LAL-1.3" = "LAL-1.3",
            "LGPL-2.0-only" = "LGPL-2.0-only",
            "LGPL-2.0-or-later" = "LGPL-2.0-or-later",
            "LGPL-2.1-only" = "LGPL-2.1-only",
            "LGPL-2.1-or-later" = "LGPL-2.1-or-later",
            "LGPL-3.0-only" = "LGPL-3.0-only",
            "LGPL-3.0-or-later" = "LGPL-3.0-or-later",
            "LGPLLR" = "LGPLLR",
            "LPL-1.0" = "LPL-1.0",
            "LPL-1.02" = "LPL-1.02",
            "LPPL-1.0" = "LPPL-1.0",
            "LPPL-1.1" = "LPPL-1.1",
            "LPPL-1.2" = "LPPL-1.2",
            "LPPL-1.3a" = "LPPL-1.3a",
            "LPPL-1.3c" = "LPPL-1.3c",
            "Latex2e" = "Latex2e",
            "Leptonica" = "Leptonica",
            "LiLiQ-P-1.1" = "LiLiQ-P-1.1",
            "LiLiQ-R-1.1" = "LiLiQ-R-1.1",
            "LiLiQ-Rplus-1.1" = "LiLiQ-Rplus-1.1",
            "Libpng" = "Libpng",
            "Linux-OpenIB" = "Linux-OpenIB",
            "MIT" = "MIT",
            "MIT-0" = "MIT-0",
            "MIT-CMU" = "MIT-CMU",
            "MIT-Modern-Variant" = "MIT-Modern-Variant",
            "MIT-advertising" = "MIT-advertising",
            "MIT-enna" = "MIT-enna",
            "MIT-feh" = "MIT-feh",
            "MIT-open-group" = "MIT-open-group",
            "MITNFA" = "MITNFA",
            "MPL-1.0" = "MPL-1.0",
            "MPL-1.1" = "MPL-1.1",
            "MPL-2.0" = "MPL-2.0",
            "MPL-2.0-no-copyleft-exception" = "MPL-2.0-no-copyleft-exception",
            "MS-PL" = "MS-PL",
            "MS-RL" = "MS-RL",
            "MTLL" = "MTLL",
            "MakeIndex" = "MakeIndex",
            "MirOS" = "MirOS",
            "Motosoto" = "Motosoto",
            "MulanPSL-1.0" = "MulanPSL-1.0",
            "MulanPSL-2.0" = "MulanPSL-2.0",
            "Multics" = "Multics",
            "Mup" = "Mup",
            "NAIST-2003" = "NAIST-2003",
            "NASA-1.3" = "NASA-1.3",
            "NBPL-1.0" = "NBPL-1.0",
            "NCGL-UK-2.0" = "NCGL-UK-2.0",
            "NCSA" = "NCSA",
            "NGPL" = "NGPL",
            "NIST-PD" = "NIST-PD",
            "NIST-PD-fallback" = "NIST-PD-fallback",
            "NLOD-1.0" = "NLOD-1.0",
            "NLPL" = "NLPL",
            "NOSL" = "NOSL",
            "NPL-1.0" = "NPL-1.0",
            "NPL-1.1" = "NPL-1.1",
            "NPOSL-3.0" = "NPOSL-3.0",
            "NRL" = "NRL",
            "NTP" = "NTP",
            "NTP-0" = "NTP-0",
            "Naumen" = "Naumen",
            "Net-SNMP" = "Net-SNMP",
            "NetCDF" = "NetCDF",
            "Newsletr" = "Newsletr",
            "Nokia" = "Nokia",
            "Noweb" = "Noweb",
            "O-UDA-1.0" = "O-UDA-1.0",
            "OCCT-PL" = "OCCT-PL",
            "OCLC-2.0" = "OCLC-2.0",
            "ODC-By-1.0" = "ODC-By-1.0",
            "ODbL-1.0" = "ODbL-1.0",
            "OFL-1.0" = "OFL-1.0",
            "OFL-1.0-RFN" = "OFL-1.0-RFN",
            "OFL-1.0-no-RFN" = "OFL-1.0-no-RFN",
            "OFL-1.1" = "OFL-1.1",
            "OFL-1.1-RFN" = "OFL-1.1-RFN",
            "OFL-1.1-no-RFN" = "OFL-1.1-no-RFN",
            "OGC-1.0" = "OGC-1.0",
            "OGDL-Taiwan-1.0" = "OGDL-Taiwan-1.0",
            "OGL-Canada-2.0" = "OGL-Canada-2.0",
            "OGL-UK-1.0" = "OGL-UK-1.0",
            "OGL-UK-2.0" = "OGL-UK-2.0",
            "OGL-UK-3.0" = "OGL-UK-3.0",
            "OGTSL" = "OGTSL",
            "OLDAP-1.1" = "OLDAP-1.1",
            "OLDAP-1.2" = "OLDAP-1.2",
            "OLDAP-1.3" = "OLDAP-1.3",
            "OLDAP-1.4" = "OLDAP-1.4",
            "OLDAP-2.0" = "OLDAP-2.0",
            "OLDAP-2.0.1" = "OLDAP-2.0.1",
            "OLDAP-2.1" = "OLDAP-2.1",
            "OLDAP-2.2" = "OLDAP-2.2",
            "OLDAP-2.2.1" = "OLDAP-2.2.1",
            "OLDAP-2.2.2" = "OLDAP-2.2.2",
            "OLDAP-2.3" = "OLDAP-2.3",
            "OLDAP-2.4" = "OLDAP-2.4",
            "OLDAP-2.5" = "OLDAP-2.5",
            "OLDAP-2.6" = "OLDAP-2.6",
            "OLDAP-2.7" = "OLDAP-2.7",
            "OLDAP-2.8" = "OLDAP-2.8",
            "OML" = "OML",
            "OPL-1.0" = "OPL-1.0",
            "OSET-PL-2.1" = "OSET-PL-2.1",
            "OSL-1.0" = "OSL-1.0",
            "OSL-1.1" = "OSL-1.1",
            "OSL-2.0" = "OSL-2.0",
            "OSL-2.1" = "OSL-2.1",
            "OSL-3.0" = "OSL-3.0",
            "OpenSSL" = "OpenSSL",
            "PDDL-1.0" = "PDDL-1.0",
            "PHP-3.0" = "PHP-3.0",
            "PHP-3.01" = "PHP-3.01",
            "PSF-2.0" = "PSF-2.0",
            "Parity-6.0.0" = "Parity-6.0.0",
            "Parity-7.0.0" = "Parity-7.0.0",
            "Plexus" = "Plexus",
            "PolyForm-Noncommercial-1.0.0" = "PolyForm-Noncommercial-1.0.0",
            "PolyForm-Small-Business-1.0.0" = "PolyForm-Small-Business-1.0.0",
            "PostgreSQL" = "PostgreSQL",
            "Python-2.0" = "Python-2.0",
            "QPL-1.0" = "QPL-1.0",
            "Qhull" = "Qhull",
            "RHeCos-1.1" = "RHeCos-1.1",
            "RPL-1.1" = "RPL-1.1",
            "RPL-1.5" = "RPL-1.5",
            "RPSL-1.0" = "RPSL-1.0",
            "RSA-MD" = "RSA-MD",
            "RSCPL" = "RSCPL",
            "Rdisc" = "Rdisc",
            "Ruby" = "Ruby",
            "SAX-PD" = "SAX-PD",
            "SCEA" = "SCEA",
            "SGI-B-1.0" = "SGI-B-1.0",
            "SGI-B-1.1" = "SGI-B-1.1",
            "SGI-B-2.0" = "SGI-B-2.0",
            "SHL-0.5" = "SHL-0.5",
            "SHL-0.51" = "SHL-0.51",
            "SISSL" = "SISSL",
            "SISSL-1.2" = "SISSL-1.2",
            "SMLNJ" = "SMLNJ",
            "SMPPL" = "SMPPL",
            "SNIA" = "SNIA",
            "SPL-1.0" = "SPL-1.0",
            "SSH-OpenSSH" = "SSH-OpenSSH",
            "SSH-short" = "SSH-short",
            "SSPL-1.0" = "SSPL-1.0",
            "SWL" = "SWL",
            "Saxpath" = "Saxpath",
            "Sendmail" = "Sendmail",
            "Sendmail-8.23" = "Sendmail-8.23",
            "SimPL-2.0" = "SimPL-2.0",
            "Sleepycat" = "Sleepycat",
            "Spencer-86" = "Spencer-86",
            "Spencer-94" = "Spencer-94",
            "Spencer-99" = "Spencer-99",
            "SugarCRM-1.1.3" = "SugarCRM-1.1.3",
            "TAPR-OHL-1.0" = "TAPR-OHL-1.0",
            "TCL" = "TCL",
            "TCP-wrappers" = "TCP-wrappers",
            "TMate" = "TMate",
            "TORQUE-1.1" = "TORQUE-1.1",
            "TOSL" = "TOSL",
            "TU-Berlin-1.0" = "TU-Berlin-1.0",
            "TU-Berlin-2.0" = "TU-Berlin-2.0",
            "UCL-1.0" = "UCL-1.0",
            "UPL-1.0" = "UPL-1.0",
            "Unicode-DFS-2015" = "Unicode-DFS-2015",
            "Unicode-DFS-2016" = "Unicode-DFS-2016",
            "Unicode-TOU" = "Unicode-TOU",
            "Unlicense" = "Unlicense",
            "VOSTROM" = "VOSTROM",
            "VSL-1.0" = "VSL-1.0",
            "Vim" = "Vim",
            "W3C" = "W3C",
            "W3C-19980720" = "W3C-19980720",
            "W3C-20150513" = "W3C-20150513",
            "WTFPL" = "WTFPL",
            "Watcom-1.0" = "Watcom-1.0",
            "Wsuipa" = "Wsuipa",
            "X11" = "X11",
            "XFree86-1.1" = "XFree86-1.1",
            "XSkat" = "XSkat",
            "Xerox" = "Xerox",
            "Xnet" = "Xnet",
            "ZPL-1.1" = "ZPL-1.1",
            "ZPL-2.0" = "ZPL-2.0",
            "ZPL-2.1" = "ZPL-2.1",
            "Zed" = "Zed",
            "Zend-2.0" = "Zend-2.0",
            "Zimbra-1.3" = "Zimbra-1.3",
            "Zimbra-1.4" = "Zimbra-1.4",
            "Zlib" = "Zlib",
            "blessing" = "blessing",
            "bzip2-1.0.5" = "bzip2-1.0.5",
            "bzip2-1.0.6" = "bzip2-1.0.6",
            "copyleft-next-0.3.0" = "copyleft-next-0.3.0",
            "copyleft-next-0.3.1" = "copyleft-next-0.3.1",
            "curl" = "curl",
            "diffmark" = "diffmark",
            "dvipdfm" = "dvipdfm",
            "eGenix" = "eGenix",
            "etalab-2.0" = "etalab-2.0",
            "freeware" = "freeware",
            "gSOAP-1.3b" = "gSOAP-1.3b",
            "gnuplot" = "gnuplot",
            "iMatix" = "iMatix",
            "libpng-2.0" = "libpng-2.0",
            "libselinux-1.0" = "libselinux-1.0",
            "libtiff" = "libtiff",
            "mpich2" = "mpich2",
            "proprietary" = "proprietary",
            "psfrag" = "psfrag",
            "psutils" = "psutils",
            "unknown" = "unknown",
            "xinetd" = "xinetd",
            "xpp" = "xpp",
            "zlib-acknowledgement" = "zlib-acknowledgement"
        }
        /** A structure describing some interesting facts about an OS template project */
        export interface TemplateOsInfoProject {
            /** OS template project OS details */
            os ? : dedicated.TemplateOsInfoProjectItem;
            /** OS template project usage details */
            usage ? : dedicated.TemplateOsInfoProjectItem;
        }
        /** A structure describing some interesting facts about an OS template project item */
        export interface TemplateOsInfoProjectItem {
            /** OS template project item governance */
            governance ? : string[];
            /** OS template project item release notes */
            releaseNotes ? : string;
            /** OS template project item url */
            url ? : string;
            /** OS template project item version */
            version ? : string;
        }
        /** A structure describing input questions for the specific OS template */
        export interface TemplateOsInput {
            /** Default value */
            default ? : string;
            /** Input question description */
            description ? : string;
            /** When type is enum: name of the possible enum values */
            enum: string[];
            /** Whether answering to that question is mandatory in order to trigger an install with that specific OS or not */
            mandatory: boolean;
            /** Input question name */
            name: string;
            /** Input type */
            type: dedicated.TemplateOsInputTypeEnum;
        }
        /** Template OS Input type enum */
        export enum TemplateOsInputTypeEnum {
            "boolean" = "boolean",
            "date" = "date",
            "email" = "email",
            "enum" = "enum",
            "hexstring" = "hexstring",
            "ip" = "ip",
            "keyValue" = "keyValue",
            "number" = "number",
            "string" = "string",
            "text" = "text",
            "time" = "time",
            "url" = "url",
            "uuid" = "uuid"
        }
        /** all language available */
        export enum TemplateOsLanguageEnum {
            "ar" = "ar",
            "bg" = "bg",
            "cs" = "cs",
            "da" = "da",
            "de" = "de",
            "el" = "el",
            "en" = "en",
            "es" = "es",
            "et" = "et",
            "fi" = "fi",
            "fr" = "fr",
            "he" = "he",
            "hr" = "hr",
            "hu" = "hu",
            "it" = "it",
            "ja" = "ja",
            "ko" = "ko",
            "lt" = "lt",
            "lv" = "lv",
            "nb" = "nb",
            "nl" = "nl",
            "no" = "no",
            "pl" = "pl",
            "pt" = "pt",
            "ro" = "ro",
            "ru" = "ru",
            "sk" = "sk",
            "sl" = "sl",
            "sr" = "sr",
            "sv" = "sv",
            "th" = "th",
            "tr" = "tr",
            "tu" = "tu",
            "uk" = "uk",
            "zh-Hans-CN" = "zh-Hans-CN",
            "zh-Hans-HK" = "zh-Hans-HK"
        }
        /** A structure describing properties customizables about this dedicated installation template */
        export interface TemplateOsProperties {
            /** Set up the server using the provided hostname instead of the default hostname */
            customHostname ? : string;
            /** Indicate the URL where your postinstall customisation script is located */
            postInstallationScriptLink ? : string;
            /** indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu */
            postInstallationScriptReturn ? : string;
            /** Name of the ssh key that should be installed. Password login will be disabled */
            sshKeyName ? : string;
            /** Use the distribution's native kernel instead of the recommended OVH Kernel */
            useDistributionKernel ? : boolean;
        }
        /** Os subfamily definition */
        export enum TemplateOsSubfamilyEnum {
            "alma" = "alma",
            "aos" = "aos",
            "arch" = "arch",
            "byoi" = "byoi",
            "centos" = "centos",
            "cloudlinux" = "cloudlinux",
            "coreos" = "coreos",
            "debian" = "debian",
            "dgx" = "dgx",
            "esxi" = "esxi",
            "fedora" = "fedora",
            "freebsd" = "freebsd",
            "gentoo" = "gentoo",
            "hyperv" = "hyperv",
            "omnios" = "omnios",
            "openio" = "openio",
            "openmediavault" = "openmediavault",
            "opensuse" = "opensuse",
            "ovh" = "ovh",
            "pcs" = "pcs",
            "power" = "power",
            "proxmox" = "proxmox",
            "rhel" = "rhel",
            "rocky" = "rocky",
            "slackware" = "slackware",
            "sles-sap" = "sles-sap",
            "smartos" = "smartos",
            "solusvm" = "solusvm",
            "ubuntu" = "ubuntu",
            "windows-server-core" = "windows-server-core",
            "windows-server-desktop-exp" = "windows-server-desktop-exp",
            "xcp" = "xcp",
            "xen" = "xen"
        }
        /** Os type */
        export enum TemplateOsTypeEnum {
            "bsd" = "bsd",
            "custom" = "custom",
            "ibm" = "ibm",
            "linux" = "linux",
            "solaris" = "solaris",
            "unix" = "unix",
            "windows" = "windows"
        }
        /** Os usage definition */
        export enum TemplateOsUsageEnum {
            "backup" = "backup",
            "basic" = "basic",
            "customer" = "customer",
            "database" = "database",
            "erp" = "erp",
            "hosting" = "hosting",
            "management" = "management",
            "other" = "other",
            "readyToUse" = "readyToUse",
            "virtualisation" = "virtualisation",
            "virtualization" = "virtualization"
        }
        /** partition type */
        export enum TemplatePartitionTypeEnum {
            "logical" = "logical",
            "lv" = "lv",
            "primary" = "primary"
        }
    }
    export namespace domain {
        /** Document file format */
        export enum DocumentFormatsEnum {
            "gif" = "gif",
            "jpeg" = "jpeg",
            "jpg" = "jpg",
            "pdf" = "pdf",
            "png" = "png"
        }
        /** Operation actions */
        export enum OperationActionEnum {
            "canCancel" = "canCancel",
            "canCorrect" = "canCorrect",
            "canRelaunch" = "canRelaunch",
            "canReset" = "canReset"
        }
        /** Operation functions */
        export enum OperationFunctionEnum {
            "ContactControl" = "ContactControl",
            "DnsAnycastActivate" = "DnsAnycastActivate",
            "DnsAnycastDeactivate" = "DnsAnycastDeactivate",
            "DnssecDisable" = "DnssecDisable",
            "DnssecEnable" = "DnssecEnable",
            "DnssecResigning" = "DnssecResigning",
            "DnssecRollKsk" = "DnssecRollKsk",
            "DnssecRollZsk" = "DnssecRollZsk",
            "DomainAfterMarket" = "DomainAfterMarket",
            "DomainContactControl" = "DomainContactControl",
            "DomainContactUpdate" = "DomainContactUpdate",
            "DomainControl" = "DomainControl",
            "DomainCreate" = "DomainCreate",
            "DomainDelete" = "DomainDelete",
            "DomainDnsUpdate" = "DomainDnsUpdate",
            "DomainDsUpdate" = "DomainDsUpdate",
            "DomainEmailRedirectionsCreate" = "DomainEmailRedirectionsCreate",
            "DomainEmailRedirectionsDelete" = "DomainEmailRedirectionsDelete",
            "DomainHold" = "DomainHold",
            "DomainHostCreate" = "DomainHostCreate",
            "DomainHostDelete" = "DomainHostDelete",
            "DomainHostUpdate" = "DomainHostUpdate",
            "DomainIncomingTransfer" = "DomainIncomingTransfer",
            "DomainLock" = "DomainLock",
            "DomainOutgoingTransfer" = "DomainOutgoingTransfer",
            "DomainRegistryDelete" = "DomainRegistryDelete",
            "DomainRenew" = "DomainRenew",
            "DomainResourceDelete" = "DomainResourceDelete",
            "DomainRestore" = "DomainRestore",
            "DomainTrade" = "DomainTrade",
            "DomainUnhold" = "DomainUnhold",
            "DomainUnlock" = "DomainUnlock",
            "ZoneImport" = "ZoneImport"
        }
        /** Operation status */
        export enum OperationStatusEnum {
            "cancelled" = "cancelled",
            "doing" = "doing",
            "done" = "done",
            "error" = "error",
            "todo" = "todo"
        }
        /** One step from an operation */
        export interface OperationStep {
            /** Description of the step */
            description: string;
            /** Execution time of the step */
            executionDuration: number;
            /** Name of the step */
            step: string;
        }
        /** Tasks associated to domain */
        export interface Task {
            /** Can accelerate the task */
            canAccelerate: boolean;
            /** Can cancel the task */
            canCancel: boolean;
            /** Can relaunch the task */
            canRelaunch: boolean;
            /** Comment about the task */
            comment ? : string;
            /** Creation date of the task */
            creationDate: string;
            /** Domain of the task */
            domain ? : string;
            /** Done date of the task */
            doneDate ? : string;
            /** Function of the task */
            function: string;
            /** Id of the task */
            id: number;
            /** Last update date of the task */
            lastUpdate: string;
            /** Status of the task */
            status: domain.OperationStatusEnum;
            /** Todo date of the task */
            todoDate: string;
        }
    }
    export namespace http {
        /** All HTTP methods available */
        export enum MethodEnum {
            "DELETE" = "DELETE",
            "GET" = "GET",
            "POST" = "POST",
            "PUT" = "PUT"
        }
    }
    export namespace insight {
        /** Insight access token */
        export interface Access {
            /** Access token */
            access: string;
            /** Token creation date */
            createdAt: string;
            /** Token expiration date */
            expireAt: string;
        }
    }
    export namespace ip {
        /** Possible values for IP campuses' names */
        export enum CampusEnum {
            "BHS" = "BHS",
            "ERI" = "ERI",
            "GRA" = "GRA",
            "HIL" = "HIL",
            "LIM" = "LIM",
            "RBX" = "RBX",
            "SBG" = "SBG",
            "SGP" = "SGP",
            "SY2" = "SY2",
            "SYD" = "SYD",
            "VIN" = "VIN",
            "WAW" = "WAW",
            "YNM" = "YNM"
        }
    }
    export namespace me {
        export namespace SupportLevel {
            /** Support level of an account */
            export interface Level {
                /** Level of support */
                level: me.SupportLevel.LevelTypeEnum;
            }
            /** Type of level */
            export enum LevelTypeEnum {
                "business" = "business",
                "enterprise" = "enterprise",
                "premium" = "premium",
                "premium-accredited" = "premium-accredited",
                "standard" = "standard"
            }
        }
        export namespace abuse {
            /** Get report API response */
            export interface Abuse {
                /** Abuse category */
                category: me.abuse.AbuseCategoryEnum;
                /** Creation date of the abuse */
                creationDate: string;
                /** Public ID of the abuse case */
                publicId: string;
                /** Service where is hosted the abuse */
                service: string;
                /** Abuse case status */
                status: me.abuse.AbuseStatusEnum;
            }
            /** The abuse categories */
            export enum AbuseCategoryEnum {
                "Compromised" = "Compromised",
                "Copyright" = "Copyright",
                "Illegal" = "Illegal",
                "Intrusion" = "Intrusion",
                "Malware" = "Malware",
                "Network Attack" = "Network Attack",
                "Other" = "Other",
                "Phishing" = "Phishing",
                "Spam" = "Spam"
            }
            /** The abuse status */
            export enum AbuseStatusEnum {
                "Answered" = "Answered",
                "Claimed" = "Claimed",
                "Closed" = "Closed",
                "Escalated" = "Escalated",
                "Open" = "Open",
                "Paused" = "Paused",
                "Reopened" = "Reopened",
                "Updated" = "Updated",
                "WaitingAnswer" = "WaitingAnswer"
            }
        }
        export namespace agreements {
            /** State of the agreement */
            export enum AgreementStatusEnum {
                "ko" = "ko",
                "obsolete" = "obsolete",
                "ok" = "ok",
                "todo" = "todo"
            }
            /** Contract Agreement */
            export interface ContractAgreement {
                /** State of the agreement */
                agreed: me.agreements.AgreementStatusEnum;
                /** Contract ID */
                contractId: number;
                /** Date of creation if the agreement is not signed. Date of signature if the agreement is signed */
                date: string;
                /** Contract Agreement ID */
                id: number;
            }
        }
        export namespace billing {
            export namespace group {
                export namespace service {
                    /** Missing description */
                    export interface Create {
                        /** A service ID to associate */
                        serviceId: number;
                    }
                } /** Missing description */
                export interface BillingGroup {
                    /** Contact ID from /me/contact */
                    contactId ? : number;
                    /** Creation date */
                    creationDate: string;
                    /** Billing group ID */
                    groupId: number;
                    /** Last update date */
                    lastUpdate: string;
                    /** Billing group unique name */
                    name: string;
                    /** Payment method ID associated to the billing group */
                    paymentMethodId ? : number;
                }
                /** Missing description */
                export interface Service {
                    /** Billing group ID */
                    groupId: number;
                    /** Service ID */
                    serviceId: number;
                }
            }
            export namespace purchaseOrder {
                /** Purchase order creation payload */
                export interface Creation {
                    /** Active */
                    active ? : boolean;
                    /** Billing Group identifier */
                    billingGroupId ? : number;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Reference */
                    reference: string;
                    /** Start date */
                    startDate: string;
                    /** Type of a purchase order */
                    type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
                /** Purchase Order */
                export interface PurchaseOrder {
                    /** Active */
                    active ? : boolean;
                    /** Billing Group identifier */
                    billingGroupId ? : number;
                    /** Creation date */
                    creationDate: string;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Purchase Order identifier */
                    id: number;
                    /** Last update date */
                    lastUpdate: string;
                    /** Reference */
                    reference: string;
                    /** Start date */
                    startDate: string;
                    /** Status */
                    status: me.billing.purchaseOrder.StatusEnum;
                    /** Type of a purchase order */
                    type: me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
                /** Type of a purchase order */
                export enum PurchaseOrderTypeEnum {
                    "PURCHASE_ORDER" = "PURCHASE_ORDER",
                    "REFERENCE_ORDER" = "REFERENCE_ORDER"
                }
                /** Status of the Purchase Order */
                export enum StatusEnum {
                    "CREATED" = "CREATED",
                    "DELETED" = "DELETED"
                }
                /** Purchase order update payload */
                export interface Update {
                    /** Active */
                    active ? : boolean;
                    /** Billing group identifier */
                    billingGroupId ? : number;
                    /** Description */
                    description ? : string;
                    /** End date */
                    endDate ? : string;
                    /** Reference */
                    reference ? : string;
                    /** Start date */
                    startDate ? : string;
                    /** Type of a purchase order */
                    type ? : me.billing.purchaseOrder.PurchaseOrderTypeEnum;
                }
            }
            export namespace tasks {
                /** Asynchronous task related to Billing */
                export interface Task {
                    /** Unique identifier of the Task */
                    id: number;
                    /** Metadata linked to the Task. Will help you determine which object it relates to */
                    metadata: me.billing.tasks.TaskMetadatum[];
                    /** Describes which Task is being performed */
                    name: me.billing.tasks.TaskNameEnum;
                    /** Current status of the Task */
                    status: me.billing.tasks.TaskStatusEnum;
                    /** Current step of the Task. The step depends on the Task name. */
                    step: string;
                }
                /** Metadatum linked to a Task */
                export interface TaskMetadatum {
                    /** Metadatum key */
                    key: string;
                    /** Metadatum value */
                    value: string;
                }
                /** Billing tasks names */
                export enum TaskNameEnum {
                    "contact/change" = "contact/change"
                }
                /** Billing tasks statuses */
                export enum TaskStatusEnum {
                    "CANCELLED" = "CANCELLED",
                    "DOING" = "DOING",
                    "DONE" = "DONE",
                    "ERROR" = "ERROR",
                    "INIT" = "INIT",
                    "PROBLEM" = "PROBLEM",
                    "TODO" = "TODO"
                }
            }
        }
        export namespace consent {
            /** Consent campaign */
            export interface Campaign {
                /** Campaign description */
                description: string;
                /** Campaign name */
                name: string;
                /** Campaign type */
                type: me.consent.CampaignTypeEnum;
            }
            /** Campaign type */
            export enum CampaignTypeEnum {
                "OPTIN" = "OPTIN",
                "OPTOUT" = "OPTOUT"
            }
            /** Customer consent information for a campaign */
            export interface Consent {
                /** Campaign name */
                campaign: string;
                /** Consent decisions history for this campaign */
                history: me.consent.Decision[];
                /** Campaign type */
                type: me.consent.CampaignTypeEnum;
                /** Current consent value */
                value: boolean;
            }
            /** Customer consent decision */
            export interface Decision {
                /** Consent decision datetime */
                timestamp: string;
                /** Consent decision value */
                value: boolean;
            }
        }
        export namespace consumption {
            export namespace transaction {
                export namespace Element {
                    /** Element of consumption for resource */
                    export interface Detail {
                        /** Consumption amount price */
                        price: me.consumption.Price;
                        /** Consumption quantity */
                        quantity: number;
                        /** Unique ID associated to one service element */
                        unique_id ? : string;
                    }
                } /** Element of consumption for resource */
                export interface Element {
                    /** List of consumption details for this planCode */
                    details: me.consumption.transaction.element.Detail[];
                    /** Identifier of the offer */
                    planCode: string;
                    /** Family of the offer */
                    planFamily: string;
                    /** Consumption amount price */
                    price: me.consumption.Price;
                    /** Consumption quantity */
                    quantity: number;
                }
            } /** Price with currency and amount in micro-cents */
            export interface Price {
                /** currencyCode */
                currencyCode: order.CurrencyCodeEnum;
                /** text */
                text: string;
                /** value */
                value: number;
                /** valueInUcents */
                valueInUcents: number;
            }
            /** List of consumptions recorded in a range */
            export interface Transaction {
                /** Begin date */
                beginDate: string;
                /** Creation date */
                creationDate ? : string;
                /** List of product plan code consumption */
                elements: me.consumption.transaction.Element[];
                /** End date */
                endDate ? : string;
                /** Transaction ID */
                id ? : number;
                /** Last update */
                lastUpdate ? : string;
                /** Consumption amount price */
                price: me.consumption.Price;
                /** Service ID */
                serviceId: number;
            }
        }
        export namespace contact {
            /** Representation of a Contact */
            export interface Address {
                /** City */
                city: string;
                /** Country */
                country: nichandle.CountryEnum;
                /** First line of the address */
                line1: string;
                /** Second line of the address */
                line2 ? : string;
                /** Third line of the address */
                line3 ? : string;
                /** Other details */
                otherDetails ? : string;
                /** Province name */
                province ? : string;
                /** Zipcode */
                zip ? : string;
            }
            /** Contact definition */
            export interface Contact {
                /** Address for this contact */
                address: me.contact.Address;
                /** Birth city */
                birthCity ? : string;
                /** Birth Country */
                birthCountry ? : nichandle.CountryEnum;
                /** Birth date */
                birthDay ? : string;
                /** Birth Zipcode */
                birthZip ? : string;
                /** Cellphone number */
                cellPhone ? : string;
                /** National identification number of your company */
                companyNationalIdentificationNumber ? : string;
                /** Email address */
                email: string;
                /** Fax number */
                fax ? : string;
                /** First name */
                firstName: string;
                /** Gender */
                gender ? : nichandle.GenderEnum;
                /** Contact Identifier */
                id: number;
                /** Language */
                language: nichandle.LanguageEnum;
                /** Last name */
                lastName: string;
                /** Legal form of the contact */
                legalForm: nichandle.LegalFormEnum;
                /** National identification number of the contact */
                nationalIdentificationNumber ? : string;
                /** Nationality */
                nationality ? : nichandle.CountryEnum;
                /** Organisation name */
                organisationName ? : string;
                /** Organisation type */
                organisationType ? : string;
                /** Telephone number */
                phone ? : string;
                /** Spare email address */
                spareEmail ? : string;
                /** VAT number */
                vat ? : string;
            }
        }
        export namespace credit {
            export namespace balance {
                export namespace movement {
                    /** Missing description */
                    export interface SubObject {
                        /** Sub object ID */
                        id: string;
                        /** Sub object name */
                        name: string;
                    }
                    /** Balance movement type */
                    export enum TypeEnum {
                        "BONUS" = "BONUS",
                        "CANCEL" = "CANCEL",
                        "CREDIT_NOTE" = "CREDIT_NOTE",
                        "EXPIRE" = "EXPIRE",
                        "GIFT" = "GIFT",
                        "MANUAL" = "MANUAL",
                        "ORDER" = "ORDER",
                        "REFUND" = "REFUND",
                        "UNPAID" = "UNPAID",
                        "USE" = "USE",
                        "VOUCHER" = "VOUCHER"
                    }
                } /** Missing description */
                export interface BalanceDetails {
                    /** Balance part amount */
                    amount: order.Price;
                    /** Balance sub name */
                    balanceSubName ? : string;
                    /** Expiring parts of this balance */
                    expiring: me.credit.balance.ExpiringMovement[];
                    /** Service ID of this balance part */
                    serviceId ? : number;
                }
                /** Missing description */
                export interface BookedMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance sub name */
                    balanceSubName ? : string;
                    /** Order ID */
                    orderId: number;
                }
                /** Missing description */
                export interface ExpiringMovement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Movement creation date */
                    creationDate: string;
                    /** Movement expiration date */
                    expirationDate: string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Object source of this credit movement */
                    sourceObject: me.credit.balance.movement.SubObject;
                }
                /** Missing description */
                export interface Movement {
                    /** Movement amount */
                    amount: order.Price;
                    /** Balance name */
                    balanceName: string;
                    /** Movement creation date */
                    creationDate: string;
                    /** Object destination of this credit movement */
                    destinationObject ? : me.credit.balance.movement.SubObject;
                    /** Movement expiration date */
                    expirationDate ? : string;
                    /** Movement last update */
                    lastUpdate: string;
                    /** Movement ID */
                    movementId: number;
                    /** Order ID associated to this credit movement */
                    orderId ? : number;
                    /** Object source of this credit movement */
                    sourceObject: me.credit.balance.movement.SubObject;
                    /** Movement type */
                    type: me.credit.balance.movement.TypeEnum;
                }
                /** Balance type */
                export enum TypeEnum {
                    "BONUS" = "BONUS",
                    "DEPOSIT" = "DEPOSIT",
                    "PREPAID_ACCOUNT" = "PREPAID_ACCOUNT",
                    "VOUCHER" = "VOUCHER"
                }
            }
            export namespace code {
                /** Missing description */
                export interface Redeem {
                    /** Code to validate */
                    inputCode: string;
                    /** Restrict credit to a specific service */
                    serviceId: number;
                }
            } /** Missing description */
            export interface Balance {
                /** Balance amount */
                amount: order.Price;
                /** Balance details, amounts by serviceID */
                balanceDetails: me.credit.balance.BalanceDetails[];
                /** Balance name */
                balanceName: string;
                /** Movement already booked on orders */
                booked: me.credit.balance.BookedMovement[];
                /** Balance creation date */
                creationDate: string;
                /** Movement expiring soon */
                expiring: me.credit.balance.ExpiringMovement[];
                /** Balance last update */
                lastUpdate: string;
                /** Balance type */
                type: me.credit.balance.TypeEnum;
            }
        }
        export namespace geolocation {
            /** Representation of country and continent from visitor IP */
            export interface ContinentCountryLocation {
                /** Continent */
                continent ? : me.geolocation.ContinentEnum;
                /** Country iso code */
                countryCode ? : me.geolocation.CountryEnum;
                /** The IP address processed, the user's origin one */
                ip: string;
            }
            /** Continent */
            export enum ContinentEnum {
                "africa" = "africa",
                "antartica" = "antartica",
                "asia" = "asia",
                "europe" = "europe",
                "north-america" = "north-america",
                "oceania" = "oceania",
                "south-america" = "south-america"
            }
            /** Country iso code */
            export enum CountryEnum {
                "ac" = "ac",
                "ad" = "ad",
                "ae" = "ae",
                "af" = "af",
                "ag" = "ag",
                "ai" = "ai",
                "al" = "al",
                "am" = "am",
                "an" = "an",
                "ao" = "ao",
                "aq" = "aq",
                "ar" = "ar",
                "as" = "as",
                "at" = "at",
                "au" = "au",
                "aw" = "aw",
                "ax" = "ax",
                "az" = "az",
                "ba" = "ba",
                "bb" = "bb",
                "bd" = "bd",
                "be" = "be",
                "bf" = "bf",
                "bg" = "bg",
                "bh" = "bh",
                "bi" = "bi",
                "bj" = "bj",
                "bl" = "bl",
                "bm" = "bm",
                "bn" = "bn",
                "bo" = "bo",
                "bq" = "bq",
                "br" = "br",
                "bs" = "bs",
                "bt" = "bt",
                "bv" = "bv",
                "bw" = "bw",
                "by" = "by",
                "bz" = "bz",
                "ca" = "ca",
                "cc" = "cc",
                "cd" = "cd",
                "cf" = "cf",
                "cg" = "cg",
                "ch" = "ch",
                "ci" = "ci",
                "ck" = "ck",
                "cl" = "cl",
                "cm" = "cm",
                "cn" = "cn",
                "co" = "co",
                "cr" = "cr",
                "cs" = "cs",
                "cu" = "cu",
                "cv" = "cv",
                "cw" = "cw",
                "cx" = "cx",
                "cy" = "cy",
                "cz" = "cz",
                "de" = "de",
                "dj" = "dj",
                "dk" = "dk",
                "dm" = "dm",
                "do" = "do",
                "dz" = "dz",
                "ec" = "ec",
                "ee" = "ee",
                "eg" = "eg",
                "eh" = "eh",
                "er" = "er",
                "es" = "es",
                "et" = "et",
                "fc" = "fc",
                "fd" = "fd",
                "fi" = "fi",
                "fj" = "fj",
                "fk" = "fk",
                "fm" = "fm",
                "fo" = "fo",
                "fr" = "fr",
                "fx" = "fx",
                "ga" = "ga",
                "gb" = "gb",
                "gd" = "gd",
                "ge" = "ge",
                "gf" = "gf",
                "gg" = "gg",
                "gh" = "gh",
                "gi" = "gi",
                "gl" = "gl",
                "gm" = "gm",
                "gn" = "gn",
                "gp" = "gp",
                "gq" = "gq",
                "gr" = "gr",
                "gs" = "gs",
                "gt" = "gt",
                "gu" = "gu",
                "gw" = "gw",
                "gy" = "gy",
                "hk" = "hk",
                "hm" = "hm",
                "hn" = "hn",
                "hr" = "hr",
                "ht" = "ht",
                "hu" = "hu",
                "id" = "id",
                "ie" = "ie",
                "il" = "il",
                "im" = "im",
                "in" = "in",
                "io" = "io",
                "iq" = "iq",
                "ir" = "ir",
                "is" = "is",
                "it" = "it",
                "je" = "je",
                "jm" = "jm",
                "jo" = "jo",
                "jp" = "jp",
                "ke" = "ke",
                "kg" = "kg",
                "kh" = "kh",
                "ki" = "ki",
                "km" = "km",
                "kn" = "kn",
                "kp" = "kp",
                "kr" = "kr",
                "kw" = "kw",
                "ky" = "ky",
                "kz" = "kz",
                "la" = "la",
                "lb" = "lb",
                "lc" = "lc",
                "li" = "li",
                "lk" = "lk",
                "lr" = "lr",
                "ls" = "ls",
                "lt" = "lt",
                "lu" = "lu",
                "lv" = "lv",
                "ly" = "ly",
                "ma" = "ma",
                "mc" = "mc",
                "md" = "md",
                "me" = "me",
                "mf" = "mf",
                "mg" = "mg",
                "mh" = "mh",
                "mk" = "mk",
                "ml" = "ml",
                "mm" = "mm",
                "mn" = "mn",
                "mo" = "mo",
                "mp" = "mp",
                "mq" = "mq",
                "mr" = "mr",
                "ms" = "ms",
                "mt" = "mt",
                "mu" = "mu",
                "mv" = "mv",
                "mw" = "mw",
                "mx" = "mx",
                "my" = "my",
                "mz" = "mz",
                "na" = "na",
                "nc" = "nc",
                "ne" = "ne",
                "nf" = "nf",
                "ng" = "ng",
                "ni" = "ni",
                "nl" = "nl",
                "no" = "no",
                "np" = "np",
                "nr" = "nr",
                "nu" = "nu",
                "nz" = "nz",
                "om" = "om",
                "pa" = "pa",
                "pe" = "pe",
                "pf" = "pf",
                "pg" = "pg",
                "ph" = "ph",
                "pk" = "pk",
                "pl" = "pl",
                "pm" = "pm",
                "pn" = "pn",
                "pr" = "pr",
                "ps" = "ps",
                "pt" = "pt",
                "pw" = "pw",
                "py" = "py",
                "qa" = "qa",
                "qc" = "qc",
                "re" = "re",
                "ro" = "ro",
                "rs" = "rs",
                "ru" = "ru",
                "rw" = "rw",
                "sa" = "sa",
                "sb" = "sb",
                "sc" = "sc",
                "sd" = "sd",
                "se" = "se",
                "sg" = "sg",
                "sh" = "sh",
                "si" = "si",
                "sj" = "sj",
                "sk" = "sk",
                "sl" = "sl",
                "sm" = "sm",
                "sn" = "sn",
                "so" = "so",
                "sr" = "sr",
                "ss" = "ss",
                "st" = "st",
                "sv" = "sv",
                "sx" = "sx",
                "sy" = "sy",
                "sz" = "sz",
                "tc" = "tc",
                "td" = "td",
                "tf" = "tf",
                "tg" = "tg",
                "th" = "th",
                "tj" = "tj",
                "tk" = "tk",
                "tl" = "tl",
                "tm" = "tm",
                "tn" = "tn",
                "to" = "to",
                "tp" = "tp",
                "tr" = "tr",
                "tt" = "tt",
                "tv" = "tv",
                "tw" = "tw",
                "tz" = "tz",
                "ua" = "ua",
                "ug" = "ug",
                "uk" = "uk",
                "um" = "um",
                "us" = "us",
                "uy" = "uy",
                "uz" = "uz",
                "va" = "va",
                "vc" = "vc",
                "ve" = "ve",
                "vg" = "vg",
                "vi" = "vi",
                "vn" = "vn",
                "vu" = "vu",
                "we" = "we",
                "wf" = "wf",
                "ws" = "ws",
                "ye" = "ye",
                "yt" = "yt",
                "yu" = "yu",
                "za" = "za",
                "zm" = "zm",
                "zw" = "zw"
            }
        }
        export namespace incident {
            /** Original service that can be migrated */
            export interface MigrateServices {
                /** If false, the order will be registered; if true, the order will be returned but not registered. Useful to compute prices */
                dryRun: boolean;
                /** IDs of the services to migrate */
                serviceIds: number[];
            }
            /** Order created in order to migrate a service */
            export interface Order {
                /** Order created in order to migrate a service */
                order: order.Order;
            }
            /** Commercial gesture applied for the service migration */
            export interface PercentagePromotion {
                /** Duration applied for the commercial gesture */
                duration: string;
                /** Percentage of the discount */
                value: number;
            }
            /** Commercial offer a customer can migrate his service to */
            export interface ProposedOffer {
                /** List of configurations used for the migration */
                configurations: me.incident.ProposedOfferConfiguration[];
                /** Proposed commercial offer */
                plan: order.cart.GenericProductDefinition;
                /** Pricing mode used to bill the offer */
                pricingMode: string;
                /** Promotion applied to the commercial offer */
                promotion: me.incident.PercentagePromotion;
            }
            /** Config */
            export interface ProposedOfferConfiguration {
                /** name */
                name: string;
                /** value */
                value: string;
            }
            /** Service you may migrate to a given offer */
            export interface ServiceMigration {
                /** Options to migrate linked to the original service */
                addons: me.incident.ServiceMigration[];
                /** ID of an ongoing migration order */
                orderId ? : number;
                /** Proposed commercial offer to replace the service */
                proposedOffer: me.incident.ProposedOffer;
                /** Description of the service to migrate */
                serviceToMigrate ? : me.incident.ServiceToMigrate;
            }
            /** Original service that can be migrated */
            export interface ServiceToMigrate {
                /** Description of the offer of the service */
                description: string;
                /** Additional information on the service */
                metadata: complexType.SafeKeyValue < string > [];
                /** Route */
                route ? : string;
                /** ID of the migratable service */
                serviceId: number;
                /** Name of the migratable service */
                serviceName: string;
            }
        }
        export namespace insight {
            /** Insight access token */
            export interface Access {
                /** Access token */
                access: string;
                /** Token creation date */
                createdAt: string;
                /** Token expiration date */
                expireAt: string;
            }
        }
        export namespace migration {
            export namespace step {
                /** Country Migration step contracts data */
                export interface Contracts {
                    /** Array of contract agreements to accept */
                    agreements: me.agreements.ContractAgreement[];
                }
                /** Country Migration step debt data */
                export interface Debt {
                    /** Balance amount */
                    balanceAmount ? : order.Price;
                    /** OVH Account amount */
                    ovhAccountAmount ? : order.Price;
                }
                /** Name of the migration step */
                export enum NameEnum {
                    "CONTRACTS" = "CONTRACTS",
                    "DEBT" = "DEBT",
                    "NIC" = "NIC",
                    "ORDERS" = "ORDERS"
                }
                /** Country Migration step orders data */
                export interface Orders {
                    /** Whether there is pending operations */
                    pendingOperations: boolean;
                    /** Whether there is pending promotions */
                    pendingPromotions: boolean;
                    /** Whether there is pending subscriptions */
                    pendingSubscriptions: boolean;
                }
                /** Status of the migration step */
                export enum StatusEnum {
                    "OK" = "OK",
                    "PENDING" = "PENDING"
                }
            } /** contract */
            export interface Contract {
                /** Status */
                active: boolean;
                /** Date */
                date: string;
                /** ID */
                id: number;
                /** Name */
                name: string;
                /** PDF URL */
                pdf: string;
                /** Text of the contract */
                text: string;
            }
            /** Status of the migration */
            export enum StatusEnum {
                "CANCELED" = "CANCELED",
                "CHECKED" = "CHECKED",
                "DOING" = "DOING",
                "MIGRATED" = "MIGRATED",
                "TODO" = "TODO",
                "TO_CHECK" = "TO_CHECK"
            }
            /** Country Migration Step */
            export interface Step {
                /** Contracts data */
                contracts ? : me.migration.step.Contracts;
                /** Debt data */
                debt ? : me.migration.step.Debt;
                /** Migration step name */
                name: me.migration.step.NameEnum;
                /** Orders data */
                orders ? : me.migration.step.Orders;
                /** Billing step status */
                status: me.migration.step.StatusEnum;
            }
        }
        export namespace partnerLevel {
            /** Partner level of an account */
            export interface Level {
                /** Level of partner */
                level: me.partnerLevel.LevelTypeEnum;
                /** Level of Support required */
                requirement: me.partnerLevel.RequirementLoSEnum;
            }
            /** Type of level */
            export enum LevelTypeEnum {
                "advanced" = "advanced",
                "none" = "none",
                "standard" = "standard"
            }
            /** Level of Support required */
            export enum RequirementLoSEnum {
                "none" = "none",
                "premium" = "premium",
                "premium-accredited" = "premium-accredited"
            }
        }
        export namespace payment {
            export namespace method {
                /** Callback URL's to register a new payment method */
                export interface CallbackUrl {
                    /** URL when customer cancels the action */
                    cancel: string;
                    /** URL when registration encounters an error */
                    error: string;
                    /** URL when registration failed */
                    failure: string;
                    /** URL when payment method is in validation */
                    pending: string;
                    /** URL when payment method registration success */
                    success: string;
                }
                /** Payment method Challenge */
                export interface Challenge {
                    /** Challenge */
                    challenge: string;
                }
                /** Payment method creation payload */
                export interface Creation {
                    /** Associated billing contact ID */
                    billingContactId ? : number;
                    /** Callback URL's necessary to register */
                    callbackUrl: me.payment.method.CallbackUrl;
                    /** Indicates if this payment method will be set as the default one */
                    default: boolean;
                    /** Personalized description */
                    description ? : string;
                    /** Additional payment information */
                    formData ? : string;
                    /** Order ID to pay it if it's possible (in oneshot transaction or while registration) */
                    orderId ? : number;
                    /** Payment sub-type */
                    paymentSubType ? : me.payment.CreationSubTypeEnum;
                    /** Payment type */
                    paymentType: string;
                    /** Register this payment method if it's possible (default value is false and will proceed a oneshot transaction) */
                    register: boolean;
                }
                /** Add details to one payment method challenge */
                export interface Details {
                    /** Details data */
                    details: string;
                    /** Transaction ID */
                    transactionId: number;
                }
                /** Payload to finalize payment method registration */
                export interface Finalize {
                    /** Expiration month */
                    expirationMonth ? : number;
                    /** Expiration year */
                    expirationYear ? : number;
                    /** Form session ID */
                    formSessionId ? : string;
                    /** Registration ID */
                    registrationId ? : string;
                }
                /** Payment method status */
                export enum StatusEnum {
                    "CANCELED" = "CANCELED",
                    "CANCELING" = "CANCELING",
                    "CREATED" = "CREATED",
                    "CREATING" = "CREATING",
                    "ERROR" = "ERROR",
                    "EXPIRED" = "EXPIRED",
                    "FAILED" = "FAILED",
                    "MAINTENANCE" = "MAINTENANCE",
                    "PAUSED" = "PAUSED",
                    "REJECTED" = "REJECTED",
                    "REPLACED" = "REPLACED",
                    "VALID" = "VALID",
                    "VALIDATING" = "VALIDATING"
                }
                /** Registration response to validate */
                export interface Validation {
                    /** Form session ID */
                    formSessionId ? : string;
                    /** Merchant ID */
                    merchantId ? : string;
                    /** Organization ID */
                    organizationId ? : string;
                    /** Registered new payment method ID */
                    paymentMethodId: number;
                    /** Registered new transaction ID */
                    transactionId ? : number;
                    /** Registration validation URL to redirect */
                    url ? : string;
                    /** Registration validation type */
                    validationType: me.payment.IntegrationEnum;
                }
            }
            export namespace transaction {
                /** Transaction status */
                export enum StatusEnum {
                    "CANCELED" = "CANCELED",
                    "CANCELING" = "CANCELING",
                    "CONFIRMING" = "CONFIRMING",
                    "ERROR" = "ERROR",
                    "EXPIRED" = "EXPIRED",
                    "FAILED" = "FAILED",
                    "READY" = "READY",
                    "SUCCESS" = "SUCCESS"
                }
                /** Transaction type */
                export enum TypeEnum {
                    "CREDIT" = "CREDIT",
                    "DEBIT" = "DEBIT"
                }
            } /** Available payment method object */
            export interface AvailablePaymentMethod {
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: me.payment.Icon;
                /** Payment method integration type */
                integration: me.payment.IntegrationEnum;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method type allows to process oneshot payment */
                oneshot: boolean;
                /** Organization ID */
                organizationId ? : string;
                /** Payment method sub-type */
                paymentSubType ? : me.payment.AvailableSubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Indicates if payment method type is registerable ? */
                registerable: boolean;
                /** Indicates if payment method type allows payment and registration at the same time */
                registerableWithTransaction: boolean;
            }
            /** Payment method available sub-type enum */
            export enum AvailableSubTypeEnum {
                "30_DAYS" = "30_DAYS",
                "45_DAYS" = "45_DAYS",
                "60_DAYS" = "60_DAYS",
                "AMERICAN_EXPRESS" = "AMERICAN_EXPRESS",
                "AURA" = "AURA",
                "CARTE_BANCAIRE" = "CARTE_BANCAIRE",
                "CARTE_BLEUE" = "CARTE_BLEUE",
                "CHORUS" = "CHORUS",
                "DINERS_CLUB" = "DINERS_CLUB",
                "DISCOVER" = "DISCOVER",
                "JCB" = "JCB",
                "MAESTRO" = "MAESTRO",
                "MASTERCARD" = "MASTERCARD",
                "NONE" = "NONE",
                "VISA" = "VISA"
            }
            /** Payment method creation sub-type enum */
            export enum CreationSubTypeEnum {
                "CHORUS" = "CHORUS",
                "NONE" = "NONE"
            }
            /** Icon */
            export interface Icon {
                /** Icon in base64 */
                data ? : string;
                /** Icon name */
                name: string;
                /** Icon URL */
                url ? : string;
            }
            /** Register integration type enum */
            export enum IntegrationEnum {
                "COMPONENT" = "COMPONENT",
                "IFRAME_VANTIV" = "IFRAME_VANTIV",
                "IN_CONTEXT" = "IN_CONTEXT",
                "NONE" = "NONE",
                "POST_FORM" = "POST_FORM",
                "REDIRECT" = "REDIRECT"
            }
            /** Payment method object */
            export interface PaymentMethod {
                /** Associated billing contact ID */
                billingContactId ? : number;
                /** Creation date */
                creationDate: string;
                /** Indicates if payment method is the default one for this account */
                default: boolean;
                /** Custom customer description */
                description ? : string;
                /** Expiration date */
                expirationDate ? : string;
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: me.payment.Icon;
                /** Payment method integration type */
                integration ? : me.payment.IntegrationEnum;
                /** Payment method public label */
                label ? : string;
                /** Last update date */
                lastUpdate: string;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method support the oneclick functionality */
                oneclick ? : boolean;
                /** Payment mean ID associated to this payment method */
                paymentMeanId ? : number;
                /** Payment method ID */
                paymentMethodId: number;
                /** Payment method sub-type */
                paymentSubType ? : me.payment.AvailableSubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Payment method status */
                status: me.payment.method.StatusEnum;
            }
            /** Transaction object */
            export interface Transaction {
                /** Transaction amount */
                amount: order.Price;
                /** Creation date */
                creationDate: string;
                /** Last update date */
                lastUpdate: string;
                /** Associated payment method ID */
                paymentMethodId: number;
                /** Transaction status */
                status: me.payment.transaction.StatusEnum;
                /** Transaction ID */
                transactionId: number;
                /** Transaction type */
                type: me.payment.transaction.TypeEnum;
            }
        }
        export namespace paymentMean {
            /** Credit card informations */
            export interface BankAccount {
                /** bic */
                bic: string;
                /** creationDate */
                creationDate: string;
                /** This credit card is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this bank account */
                description ? : string;
                /** iban */
                iban: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** mandateSignatureDate */
                mandateSignatureDate ? : string;
                /** Bank account owner's address */
                ownerAddress: string;
                /** Bank account owner's name */
                ownerName: string;
                /** Bank account state */
                state: me.paymentMean.BankAccountStateEnum;
                /** uniqueReference */
                uniqueReference: string;
                /** validationDocumentLink */
                validationDocumentLink ? : string;
            }
            /** Missing description */
            export interface BankAccountChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            export interface BankAccountCreation {
                /** Bank account BIC */
                bic: string;
                /** Custom description of this account */
                description ? : string;
                /** Bank account IBAN */
                iban: string;
                /** Bank account owner's address */
                ownerAddress: string;
                /** Bank account owner's name */
                ownerName: string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of your bank account */
            export enum BankAccountStateEnum {
                "blockedForIncidents" = "blockedForIncidents",
                "pendingValidation" = "pendingValidation",
                "replaced" = "replaced",
                "valid" = "valid"
            }
            /** A validation required to add a payment mean bank account */
            export interface BankAccountValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** Credit card informations */
            export interface CreditCard {
                /** This credit card is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this credit card */
                description ? : string;
                /** expirationDate */
                expirationDate: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Credit card BIN */
                number: string;
                /** Credit card state */
                state: me.paymentMean.CreditCardStateEnum;
                /** True if this credit card has been registered with a successful 3DSecure challenge */
                threeDsValidated: boolean;
                /** Kind of credit card */
                type: string;
            }
            /** Missing description */
            export interface CreditCardChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            export interface CreditCardCreation {
                /** Custom description of this account */
                description ? : string;
                /** Callback URL where the customer will be redirected to after validation */
                returnUrl ? : string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of your credit card */
            export enum CreditCardStateEnum {
                "expired" = "expired",
                "tooManyFailures" = "tooManyFailures",
                "valid" = "valid"
            }
            /** A validation required to add a payment mean credit card */
            export interface CreditCardValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** Deferred account informations */
            export interface Deferred {
                /** Creation date of this deferred account */
                creationDate: string;
                /** This deferred account is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this deferred account */
                description ? : string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Deferred account type */
                label ? : string;
                /** Deferred account state */
                state: me.paymentMean.DeferredStateEnum;
            }
            /** State of you deferred account */
            export enum DeferredStateEnum {
                "failed" = "failed",
                "valid" = "valid"
            }
            /** Payment mean type icon */
            export interface IconData {
                /** Icon in base64 */
                data ? : string;
                /** Icon name */
                name ? : string;
                /** Icon URL */
                url ? : string;
            }
            /** Paypal informations */
            export interface Paypal {
                /** Paypal agreement */
                agreementId: string;
                /** Paypal creation date */
                creationDate: string;
                /** This paypal is the default payment mean? */
                defaultPaymentMean: boolean;
                /** Custom description of this paypal */
                description ? : string;
                /** Paypal associated email */
                email: string;
                /** Payment method type icon */
                icon ? : me.paymentMean.IconData;
                /** id */
                id: number;
                /** Paypal state */
                state: me.paymentMean.PaypalStateEnum;
            }
            /** Missing description */
            export interface PaypalChallengeCreation {
                /** Payload to answer the challenge */
                challenge: string;
            }
            /** Missing description */
            export interface PaypalCreation {
                /** Custom description of this account */
                description ? : string;
                /** Callback URL where the customer will be redirected to after validation */
                returnUrl ? : string;
                /** Set as default payment mean once validated */
                setDefault ? : boolean;
            }
            /** State of you paypal */
            export enum PaypalStateEnum {
                "failing" = "failing",
                "tooManyFailures" = "tooManyFailures",
                "valid" = "valid"
            }
            /** A validation required to add a payment mean paypal */
            export interface PaypalValidation {
                /** id */
                id: number;
                /** submitUrl */
                submitUrl ? : string;
                /** URL where redirect for registration process */
                url: string;
                /** Kind of registration validation */
                validationType: me.paymentMean.ValidationTypeEnum;
            }
            /** All the validation you may have to do */
            export enum ValidationTypeEnum {
                "creditAccount" = "creditAccount",
                "documentToSend" = "documentToSend",
                "simpleValidation" = "simpleValidation"
            }
        }
        export namespace repricing {
            /** Description of a service being repricing */
            export interface Service {
                /** Addons of the Service */
                addons: me.repricing.Service[];
                /** Date of application of the repricing */
                applicationDate: string;
                /** Description of the Service */
                description: string;
                /** Custom name for the Service */
                displayName: string;
                /** Duration for the price described in the payload (ISO8601) */
                duration: string;
                /** Price after repricing, tax included */
                priceAfterWithTax: order.Price;
                /** Price after repricing, tax excluded */
                priceAfterWithoutTax: order.Price;
                /** Price before repricing, tax included */
                priceBeforeWithTax: order.Price;
                /** Price before repricing, tax excluded */
                priceBeforeWithoutTax: order.Price;
                /** Route */
                route ? : services.expanded.Route;
                /** Service ID */
                serviceId: number;
                /** Identifier of the service */
                serviceName: string;
                /** Total price (addons included) after repricing, tax included */
                totalPriceAfterWithTax: order.Price;
                /** Total price (addons included) after repricing, tax excluded */
                totalPriceAfterWithoutTax: order.Price;
                /** Total price (addons included) before repricing, tax included */
                totalPriceBeforeWithTax: order.Price;
                /** Total price (addons included) before repricing, tax excluded */
                totalPriceBeforeWithoutTax: order.Price;
            }
        }
        export namespace tag {
            export namespace tagKey {
                /** Tag key type */
                export enum TypeEnum {
                    "ARRAY" = "ARRAY",
                    "DATE" = "DATE",
                    "ENUM" = "ENUM",
                    "INTEGER" = "INTEGER",
                    "TEXT" = "TEXT",
                    "VARCHAR" = "VARCHAR"
                }
            } /** Available tag configuration object for creation */
            export interface AvailableTag {
                /** Tag configuration keys */
                keys: me.tag.TagKey[];
                /** Tag name */
                name: string;
            }
            /** Tag creation payload */
            export interface Creation {
                /** Reason */
                reason ? : string;
                /** Tag name */
                tagName: string;
            }
            /** Tag status */
            export enum StatusEnum {
                "CREATED" = "CREATED",
                "CREATING" = "CREATING",
                "DELETED" = "DELETED",
                "DELETING" = "DELETING",
                "ERROR" = "ERROR",
                "MODERATING" = "MODERATING",
                "REFUSED" = "REFUSED",
                "REFUSING" = "REFUSING",
                "REVOCATING" = "REVOCATING",
                "WAIT_MODERATION" = "WAIT_MODERATION",
                "WAIT_REVOCATION" = "WAIT_REVOCATION"
            }
            /** Tag */
            export interface Tag {
                /** Creation date */
                creationDate: string;
                /** Customer code */
                customerCode: string;
                /** Expiration date */
                expirationDate ? : string;
                /** Extra data */
                extra ? : me.tag.TagExtra;
                /** Last update */
                lastUpdate: string;
                /** Tag Status */
                status: me.tag.StatusEnum;
                /** Tag name */
                tag: string;
            }
            /** Tag Extra */
            export interface TagExtra {
                /** Tax exemption */
                exemption ? : string;
            }
            /** Tag configuration key */
            export interface TagKey {
                /** Enum values */
                enum ? : string[];
                /** Tag key name */
                key: string;
                /** Maximum length for a text */
                maxLength ? : number;
                /** Minimum value for a number */
                minValue ? : number;
                /** Tag key optional */
                optional: boolean;
                /** Tag value regex pattern */
                pattern ? : string;
                /** Tag key type */
                type: me.tag.tagKey.TypeEnum;
            }
        } /** Country Migration */
        export interface Migration {
            /** Billing country to migrate from */
            from: nichandle.OvhSubsidiaryEnum;
            /** Migration Id */
            id: number;
            /** Migration status */
            status: me.migration.StatusEnum;
            /** Migration steps */
            steps ? : me.migration.Step[];
            /** Billing country to migrate to */
            to: nichandle.OvhSubsidiaryEnum;
        }
    }
    export namespace oauth2 {
        /** oAuth2 Flow */
        export enum ClientFlowEnum {
            "AUTHORIZATION_CODE" = "AUTHORIZATION_CODE",
            "CLIENT_CREDENTIALS" = "CLIENT_CREDENTIALS"
        }
        /** An oAuth2 Client */
        export interface client {
            /** allowed callback urls */
            callbackUrls: string[];
            /** client's client_id */
            clientId: string;
            /** client's creation date */
            createdAt: string;
            /** client's description */
            description: string;
            /** oAuth2's flow */
            flow: oauth2.ClientFlowEnum;
            /** associated IAM identity */
            identity ? : string;
            /** client's name */
            name: string;
        }
        /** An oAuth2 Client Request */
        export interface clientRequest {
            /** allowed callback urls */
            callbackUrls: string[];
            /** client's description */
            description: string;
            /** oAuth2's flow */
            flow: oauth2.ClientFlowEnum;
            /** client's name */
            name: string;
        }
        /** An oAuth2 Client Secret */
        export interface clientSecret {
            /** client's client_id */
            clientId: string;
            /** client's client_secret */
            clientSecret: string;
        }
    }
    export namespace payment {
        export namespace method {
            /** Available payment methods */
            export interface AvailablePaymentMethod {
                /** Payment method session identifier */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: payment.method.Icon;
                /** Graphical payment integration to use */
                integration: payment.method.IntegrationType;
                /** Payment method merchant identifier */
                merchantId ? : string;
                /** Payment method type is possible to pay in oneshot mode ? */
                oneshot: boolean;
                /** Payment method organization identifier */
                organizationId ? : string;
                /** Payment method subtype */
                paymentSubType ? : string;
                /** Payment method type */
                paymentType: string;
                /** Payment method type is registerable ? */
                registerable: boolean;
                /** Payment method type is registerable with the possibility to pay in same time an order ? */
                registerableWithTransaction: boolean;
            }
            /** Payment icon */
            export interface Icon {
                /** Icon data in base64 */
                data ? : string;
                /** Icon name */
                name ? : string;
                /** Icon URL */
                url ? : string;
            }
            /** Payment method integration type */
            export enum IntegrationType {
                "COMPONENT" = "COMPONENT",
                "DONE" = "DONE",
                "IFRAME_VANTIV" = "IFRAME_VANTIV",
                "IN_CONTEXT" = "IN_CONTEXT",
                "NONE" = "NONE",
                "POST_FORM" = "POST_FORM",
                "REDIRECT" = "REDIRECT"
            }
            /** payment method */
            export interface PaymentMethod {
                /** Associated billing contact ID */
                billingContactId ? : number;
                /** Creation date */
                creationDate: string;
                /** Indicates if payment method is the default one for this account */
                default: boolean;
                /** Custom customer description */
                description ? : string;
                /** Expiration date */
                expirationDate ? : string;
                /** Form session ID */
                formSessionId ? : string;
                /** Payment method type icon */
                icon: payment.method.Icon;
                /** Payment method integration type */
                integration ? : payment.method.IntegrationType;
                /** Payment method public label */
                label ? : string;
                /** Last update date */
                lastUpdate ? : string;
                /** Merchant ID */
                merchantId ? : string;
                /** Indicates if payment method support the oneclick functionality */
                oneclick ? : boolean;
                /** Payment mean ID associated to this payment method */
                paymentMeanId ? : number;
                /** Payment method ID */
                paymentMethodId: number;
                /** Payment method sub type */
                paymentSubType ? : payment.method.SubTypeEnum;
                /** Payment method type */
                paymentType: string;
                /** Payment method status */
                status: payment.method.StatusEnum;
            }
            /** Payment method status */
            export enum StatusEnum {
                "CANCELED" = "CANCELED",
                "CANCELING" = "CANCELING",
                "CREATED" = "CREATED",
                "CREATING" = "CREATING",
                "ERROR" = "ERROR",
                "EXPIRED" = "EXPIRED",
                "FAILED" = "FAILED",
                "MAINTENANCE" = "MAINTENANCE",
                "PAUSED" = "PAUSED",
                "REJECTED" = "REJECTED",
                "REPLACED" = "REPLACED",
                "VALID" = "VALID",
                "VALIDATING" = "VALIDATING"
            }
            /** Payment method sub-type */
            export enum SubTypeEnum {
                "30_DAYS" = "30_DAYS",
                "45_DAYS" = "45_DAYS",
                "60_DAYS" = "60_DAYS",
                "AMERICAN_EXPRESS" = "AMERICAN_EXPRESS",
                "AURA" = "AURA",
                "CARTE_BANCAIRE" = "CARTE_BANCAIRE",
                "CARTE_BLEUE" = "CARTE_BLEUE",
                "CHORUS" = "CHORUS",
                "DINERS_CLUB" = "DINERS_CLUB",
                "DISCOVER" = "DISCOVER",
                "JCB" = "JCB",
                "MAESTRO" = "MAESTRO",
                "MASTERCARD" = "MASTERCARD",
                "NONE" = "NONE",
                "VISA" = "VISA"
            }
        }
    }
    export namespace recommendations {
        /** Recommendation struct */
        export interface Recommendation {
            /** advices */
            advices: recommendations.RecommendationAdvice[];
            /** Recommendation advices introduction and description sentences, indexed by supported locales */
            localizedDescription: Record < string,
            string > ;
            /** Recommendation rank */
            rank: number;
        }
        /** Recommendation advice struct */
        export interface RecommendationAdvice {
            /** Product identifier, usually range>line>category>subCategory>marketingName */
            id: string;
            /** Recommendation score */
            score: number;
            /** Product page url */
            url: string;
        }
        /** Array of Recommendation objects */
        export interface Recommendations {
            /** recommendations */
            recommendations: recommendations.Recommendation[];
        }
        /** Recommendations product ranges */
        export enum productRangesEnum {
            "baremetal" = "baremetal",
            "domain" = "domain",
            "public_cloud" = "public_cloud",
            "saas" = "saas",
            "vps" = "vps",
            "web" = "web"
        }
    }
    export namespace telephony {
        /** Billing policies settings */
        export interface BillingSettings {
            /** Renew is done by billing contact instead of billing account */
            renewByBillingContact: boolean;
        }
        /** Default IP restriction of a VoIP line */
        export interface DefaultIpRestriction {
            /** id */
            id: number;
            /** The IPv4 subnet you want to allow */
            subnet: string;
            /** The protocol you want to restrict (sip/mgcp) */
            type: telephony.ProtocolEnum;
        }
        /** Line description policies settings */
        export interface LineDescriptionSettings {
            /** Line's description is displayed on bills */
            displayOnBill: boolean;
            /** Line's description is displayed on incoming calls */
            displayOnIncomingCall: boolean;
        }
        /** Custom domains of your fax services */
        export interface MailDomain2Service {
            /** The custom domain of your fax services */
            domain: string;
            /** id */
            id: number;
        }
        /** Phone protocol */
        export enum ProtocolEnum {
            "mgcp" = "mgcp",
            "sip" = "sip"
        }
        /** Telephony settings linked to the customer account */
        export interface Settings {
            /** Billing policies settings */
            billingPolicies: telephony.BillingSettings;
            /** Line description policies settings */
            lineDescriptionPolicies: telephony.LineDescriptionSettings;
        }
    }
    export namespace xander {
        /** Available contact fields */
        export enum ContactFieldEnum {
            "address.city" = "address.city",
            "address.country" = "address.country",
            "address.line1" = "address.line1",
            "address.line2" = "address.line2",
            "address.line3" = "address.line3",
            "address.otherDetails" = "address.otherDetails",
            "address.province" = "address.province",
            "address.zip" = "address.zip",
            "birthCity" = "birthCity",
            "birthCountry" = "birthCountry",
            "birthDay" = "birthDay",
            "birthZip" = "birthZip",
            "cellPhone" = "cellPhone",
            "companyNationalIdentificationNumber" = "companyNationalIdentificationNumber",
            "email" = "email",
            "fax" = "fax",
            "firstName" = "firstName",
            "gender" = "gender",
            "language" = "language",
            "lastName" = "lastName",
            "legalForm" = "legalForm",
            "nationalIdentificationNumber" = "nationalIdentificationNumber",
            "nationality" = "nationality",
            "organisationName" = "organisationName",
            "organisationType" = "organisationType",
            "phone" = "phone",
            "spareEmail" = "spareEmail",
            "vat" = "vat"
        }
    }
    export namespace xdsl {
        /** Xdsl Settings */
        export interface Setting {
            /** Send the modem as soon as possible, do not wait the xdsl line to be active */
            resellerFastModemShipping: boolean;
            /** Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager */
            resellerModemBasicConfig: boolean;
        }
    }
}
