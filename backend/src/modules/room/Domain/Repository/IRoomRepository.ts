export default interface IRoomRepository <T>
{
    listAll () :Promise <Array<T>>;
    create (data : T) : Promise<T>;
    findById(id : string ) : Promise<T | undefined>;
    delete( data : T ) : Promise<void>;
    save(data: T): Promise<T>;
}
